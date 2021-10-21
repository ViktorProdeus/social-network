import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    UserType
} from "../../redux/users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

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
        console.log('USERS')
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
    console.log('mapStateToProps USERS')
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
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
    // withAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToProps, {}, StateType>(
        mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers, toggleFollowingInProgress})
)(UsersContainer);