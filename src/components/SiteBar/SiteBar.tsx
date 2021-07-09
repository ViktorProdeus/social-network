import React from 'react';
import s from './SiteBar.module.css';
import {Friends} from "../Friends/Friends";
import {FriendType} from "../Friends/FriendsItem/FriendsItem";

export type SiteBarType = {
    friends: FriendType[]
}

const SiteBar: React.FC<SiteBarType> = (props) => {
    return (
        <div className={s.siteBar}>
            <Friends friends={props.friends}/>
        </div>
    )
};

export {SiteBar};