import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../redux/users-reducer";
import avatarDefaultPhoto from "../../assets/images/avatar.png";
import Pagination from 'rc-pagination';
import localeInfo from '../../locale/en_US';
import { NavLink } from 'react-router-dom';
import axios from "axios";

type PropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: PropsType) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    // }

    return (
        <div className={s.users}>
            <div className="pagination">

                {/*{pages.map((p, index) =>*/}
                {/*    <span*/}
                {/*        key={index}*/}
                {/*        className={(props.currentPage === p) ? `${s.current} ${s.page}` : s.page}*/}
                {/*        onClick={() => {props.onPageChanged(p)}}*/}
                {/*    >*/}
                {/*            {p}*/}
                {/*        </span>)}*/}
                <Pagination
                    showTitle={true}
                    current={props.currentPage}
                    className="ant-pagination"
                    onChange={(e) => {
                        props.onPageChanged(e)
                    }}
                    defaultCurrent={props.currentPage}
                    defaultPageSize={props.pageSize}
                    total={props.totalUsersCount}
                    locale={localeInfo}
                />

            </div>
            {
                props.users.map(u => {
                    return (
                        <div className={s.user} key={u.id}>
                            <div className={s.leftContent}>
                                <div className={s.avatarBG}>
                                    <NavLink to={`./profile/${u.id}`}>
                                        <img className={s.avatar}
                                             src={u.photos.small !== null ? u.photos.small : avatarDefaultPhoto}
                                             alt="avatar"/>
                                    </NavLink>
                                </div>
                                <div className={s.buttons}>
                                    {
                                        u.followed
                                            ?
                                            <button className={u.followed ? s.unfollow : s.follow}
                                                    onClick={() => {
                                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                            withCredentials: true,
                                                            headers: {
                                                                "API-KEY": "e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"
                                                            }
                                                        })
                                                            .then(response => {
                                                                if(response.data.resultCode === 0) {
                                                                    props.unfollow(u.id);
                                                                }
                                                            });
                                                    }}
                                            >Unfollow</button>
                                            :
                                            <button className={u.followed ? s.unfollow : s.follow}
                                                    onClick={() => {
                                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                            withCredentials: true,
                                                            headers: {
                                                                "API-KEY": "e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"
                                                            }
                                                        })
                                                            .then(response => {
                                                                if(response.data.resultCode === 0) {
                                                                    props.follow(u.id);
                                                                }
                                                            });
                                                    }}
                                            >Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.rightContent}>
                                <div className={s.innerLeft}>
                                    <div className={s.name}>{u.name}</div>
                                    <div className={s.status}>{u.status}</div>
                                </div>
                                <div className={s.innerRight}>
                                    <div className={s.country}>{'u.location.country'}</div>
                                    <div className={s.city}>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Users;