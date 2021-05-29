import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems + ' ' + s.listReset}>
                <li className={s.dialog + ' ' + s.active}>Dimych</li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/1'></NavLink></li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/2'>Sasha</NavLink></li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/3'>Viktor</NavLink></li>
                <li className={s.dialog}>
                    <NavLink to='/dialogs/4'>Valera</NavLink></li>
            </ul>
            <ul className={s.messages + ' ' + s.listReset}>
                <li className={s.message}>Hi!</li>
                <li className={s.message}>How is your it-camasutra?</li>
                <li className={s.message}>Yo</li>
            </ul>
        </div>
    )
}

export default Dialogs;
