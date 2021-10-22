import React from 'react';
import s from './Users.module.css'
import avatarDefaultPhoto from "../../assets/images/avatar.png";
import { NavLink } from 'react-router-dom';
import { UserType } from "../../redux/users-reducer";

type PropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    user: UserType
    followingInProgress: string[]
}

const User = (props: PropsType) => {
    const {user, followingInProgress, follow, unfollow} = props;
    const u = user;

    return (
        <div className={s.user} key={u.id}>
            <div className={s.leftContent}>
                <div className={s.avatarBG}>
                    <NavLink to={`./profile/${u.id}`}>
                        <img className={s.avatar}
                             src={u.photos.small !== null ? u.photos.small : avatarDefaultPhoto}
                             alt="avatar" />
                    </NavLink>
                </div>
                <div className={s.buttons}>
                    {
                        u.followed
                            ?
                            <button className={u.followed ? s.unfollow : s.follow}
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        unfollow(u.id)
                                    }}
                            >Unfollow</button>
                            :
                            <button className={u.followed ? s.unfollow : s.follow}
                                    disabled={followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        follow(u.id)
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


}


export default User;