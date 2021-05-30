import React from 'react';
import s from './Friends.module.css';
import {FriendsItem} from "./FriendsItem/FriendsItem";
import {siteBarType} from "../../redux/state";

const Friends = (props: siteBarType) => {

    const friendsElements = props.friends.map(item => <FriendsItem id={item.id} name={item.name} />)

    return (
        <>
            <h2 className={s.title}>Friends</h2>

            <ul className={s.friendsList}>
                {friendsElements}
            </ul>
        </>
    )
};

export {Friends};