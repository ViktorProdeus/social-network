import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType, toggleFollowingInProgress
} from "../../redux/users-reducer";

import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type PropsType = MapStateToPropsType & mapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.get(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.get(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            })
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
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}

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
    followingInProgress: []
}
type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
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

export default connect<MapStateToPropsType, mapDispatchToPropsType, {}, StateType>(
    mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress}
)(UsersContainer);