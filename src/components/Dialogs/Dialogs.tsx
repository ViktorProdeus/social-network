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
    id?: number
    message: string
}

const Message = (props: MessageType) => {
    return (
        <li className={s.message}>{props.message}</li>
    )
};

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    const messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-camasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ];

    const dialogsElements = dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    const messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems + ' ' + s.listReset}>
                {dialogsElements}
            </ul>

            <ul className={s.messages + ' ' + s.listReset}>
                {messagesElements}
            </ul>
        </div>
    )
};

export default Dialogs;
