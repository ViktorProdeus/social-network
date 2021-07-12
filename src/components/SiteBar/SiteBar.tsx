import React from 'react';
import s from './SiteBar.module.css';
import {Friends} from "../Friends/Friends";
import {FriendType} from "../Friends/FriendsItem/FriendsItem";


type PropsType = {
    friends: FriendType[]
}
const SiteBar: React.FC<PropsType> = (props) => {
    return (
        <div className={s.siteBar}>
            <Friends friends={props.friends}/>
        </div>
    )
};

export {SiteBar};