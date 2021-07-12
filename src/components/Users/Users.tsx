import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'

type PropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType) => void
    users: UserType[]
}
const Users = (props: PropsType) => {
    return (
        <div className={s.users}>
            {
                props.users.map(u => {
                    return (
                        <div className={s.user} key={u.id}>
                            <div className={s.leftContent}>
                                <div>
                                    <img className={s.avatar} src={u.photoUrl} alt="avatar"/>
                                </div>
                                <div className={s.buttons}>
                                    {
                                        u.followed
                                            ? <button className={u.followed ? s.unfollow : s.follow} onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button className={u.followed ? s.unfollow : s.follow} onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.rightContent}>
                                <div className={s.innerLeft}>
                                    <div className={s.name}>{u.fullName}</div>
                                    <div className={s.status}>{u.status}</div>
                                </div>
                                <div className={s.innerRight}>
                                    <div className={s.country}>{u.location.country}</div>
                                    <div className={s.city}>{u.location.city}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users;