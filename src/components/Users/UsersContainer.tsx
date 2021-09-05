import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    setCurrentPage, UserType, follow, unfollow,
    toggleFollowingInProgress, getUsers
} from "../../redux/users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToProps


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)

        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged.bind(this)}
                    followingInProgress={this.props.followingInProgress}
                    // toggleFollowingInProgress={this.props.toggleFollowingInProgress}

                />}
        </>
    }
}

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchToProps = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: string) => {
//             dispatch(followAC(userID))
//         },
//
//         unfollow: (userID: string) => {
//             dispatch(unfollowAC(userID))
//         },
//
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setToggleFetchingAC(isFetching))
//         },
//     }
// }


//  connect<MapStateToPropsType, MapDispatchToProps, {}, StateType>(
//     mapStateToProps, {follow, unfollow, setCurrentPage, getUsers, toggleFollowingInProgress}
// )(UsersContainer);

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToProps, {}, StateType>(
        mapStateToProps, {follow, unfollow, setCurrentPage, getUsers, toggleFollowingInProgress})
)(UsersContainer);