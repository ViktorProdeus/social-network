import React from 'react';
import s from './Friends.module.css';
import {FriendsItem} from "./FriendsItem/FriendsItem";
import {SiteBarPageType} from "../../redux/state";

const Friends: React.FC<SiteBarPageType>  = (props) => {
    const friendsElements = props.friends.map(item => <FriendsItem key={item.id} id={item.id} name={item.name} />)

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