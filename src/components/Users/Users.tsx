import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import avatarDefaultPhoto from "../../assets/images/avatar.png"
import axios from "axios";

type PropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    users: UserType[]
}

class Users extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.users}>
                {
                    this.props.users.map(u => {
                        return (
                            <div className={s.user} key={u.id}>
                                <div className={s.leftContent}>
                                    <div className={s.avatarBG}>
                                        <img className={s.avatar}
                                             src={u.photos.small !== null ? u.photos.small : avatarDefaultPhoto}
                                             alt="avatar"/>
                                    </div>
                                    <div className={s.buttons}>
                                        {
                                            u.followed
                                                ?
                                                <button className={u.followed ? s.unfollow : s.follow} onClick={() => {
                                                    this.props.unfollow(u.id)
                                                }}>Unfollow</button>
                                                :
                                                <button className={u.followed ? s.unfollow : s.follow} onClick={() => {
                                                    this.props.follow(u.id)
                                                }}>Follow</button>
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
}

export default Users;