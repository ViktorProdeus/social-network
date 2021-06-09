import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css';
import {DialogItemType} from "../../../redux/state";


const DialogItem: React.FC<DialogItemType> = (props) => {

    const path = `/dialogs/${props.id}`;

    return (
        <li className={s.dialogItem}>
            <NavLink className={s.link} activeClassName={s.active} to={path}>
                <img width="30px" height="30px" src="https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png"
                     alt="avatar" />
                    {props.name}
            </NavLink>
        </li>
)
};


export
    {
        DialogItem
    }
;
