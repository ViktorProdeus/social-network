import React from 'react';
import s from './Friends.module.css';
import {FriendsItem} from "./FriendsItem/FriendsItem";
import {SiteBarType} from "../../redux/sidebar-reducer";

const Friends: React.FC<SiteBarType> = (props) => {
    const friendsElements = props.friends.map(item => <FriendsItem key={item.id} id={item.id} name={item.name}/>)

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Friends</h2>

            <ul className={s.friendsList}>
                {friendsElements}
            </ul>
        </div>
    )
};

export {Friends};