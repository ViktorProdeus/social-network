import { connect } from "react-redux";
import { StateType } from "../../redux/redux-store";
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
import { compose } from "redux";
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
        const {getUsers, currentPage, pageSize} = this.props
        getUsers(currentPage, pageSize);
    }

    onPageChanged(pageNumber: number) {
        const {setCurrentPage, getUsers, pageSize} = this.props
        setCurrentPage(pageNumber)
        getUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            {
                this.props.isFetching ? <Preloader /> :
                    <Users
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged.bind(this)}
                        followingInProgress={this.props.followingInProgress}
                    />
            }
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToProps, {}, StateType>(
        mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers, toggleFollowingInProgress})
)(UsersContainer);