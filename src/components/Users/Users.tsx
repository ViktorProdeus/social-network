import React from 'react';
import s from './Users.module.css'
import { UserType } from "../../redux/users-reducer";
import Paginator from "../Paginator/Paginator";
import User from "./User";
// import Pagination from 'rc-pagination';
// import localeInfo from "../../locale/en_US";

type PropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: string[]
}

const Users = (props: PropsType) => {
    const {
        follow,
        unfollow,
        users,
        followingInProgress,
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged,
    } = props;

    return (
        <div className={s.users}>
            <div className="pagination">

                <Paginator
                    pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                />

                {/*plugin rc-pagination*/}
                {/*<Pagination*/}
                {/*    showTitle={true}*/}
                {/*    current={props.currentPage}*/}
                {/*    className="ant-pagination"*/}
                {/*    onChange={(e) => {*/}
                {/*        props.onPageChanged(e)*/}
                {/*    }}*/}
                {/*    defaultCurrent={props.currentPage}*/}
                {/*    defaultPageSize={props.pageSize}*/}
                {/*    total={props.totalUsersCount}*/}
                {/*    locale={localeInfo}*/}
                {/*/>*/}

            </div>
            {
                users.map(u => {
                    return (
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            follow={follow}
                            unfollow={unfollow}
                        />
                    )
                })
            }
        </div>
    )
}


export default Users;