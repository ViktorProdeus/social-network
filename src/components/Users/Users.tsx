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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div className="pagination">

                    {pages.map((p, index) =>
                        <span
                            key={index}
                            className={(this.props.currentPage === p) ? `${s.current} ${s.page}` : s.page}
                            onClick={() => {this.onPageChanged(p)}}
                        >
                            {p}
                        </span>)}

                </div>
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