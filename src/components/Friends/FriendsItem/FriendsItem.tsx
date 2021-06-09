import React from 'react';
import s from './FriendsItem.module.css';
import {FriendType} from "../../../redux/state";

const FriendsItem: React.FC<FriendType> = (props ) => {


    return (
        <li className={s.item}>
            <div className={s.circle}></div>
            {props.name}
        </li>
    )
};

export {FriendsItem};