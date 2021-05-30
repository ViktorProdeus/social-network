import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

type DialogType = {
    id: number
    name: string
}

const Dialog = (props: DialogType) => {
    const path = `/dialogs/${props.id}`;

    return (
        <li className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
};

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <li className={s.message}>{props.message}</li>
    )
};

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems + ' ' + s.listReset}>
                <Dialog id={1} name={'Dimych'}/>
                <Dialog id={2} name={'Andrey'}/>
                <Dialog id={3} name={'Sveta'}/>
                <Dialog id={4} name={'Sasha'}/>
                <Dialog id={5} name={'Viktor'}/>
                <Dialog id={6} name={'Valera'}/>
            </ul>

            <ul className={s.messages + ' ' + s.listReset}>
                <Message message={'Hi!'}/>
                <Message message={'How is your it-camasutra?'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
                <Message message={'Yo'}/>
            </ul>
        </div>
    )
};

export default Dialogs;
