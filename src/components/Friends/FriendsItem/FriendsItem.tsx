import React from 'react';
import s from './FriendsItem.module.css';
import {FriendsItemType} from "../../../redux/state";

const FriendsItem = (props: FriendsItemType) => {


    return (
        <li className={s.item}>
            <div className={s.circle}></div>
            {props.name}
        </li>
    )
};

export {FriendsItem};