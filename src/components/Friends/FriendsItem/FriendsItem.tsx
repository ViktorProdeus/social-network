import React from 'react';
import s from './FriendsItem.module.css';

export type FriendType = {
    id: string
    name: string
}

const FriendsItem: React.FC<FriendType> = (props) => {


    return (
        <li className={s.item}>
            <div className={s.circle}></div>
            {props.name}
        </li>
    )
};

export {FriendsItem};