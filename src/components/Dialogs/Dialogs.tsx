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
    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    const messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-camasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}
    ];

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems + ' ' + s.listReset}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
                <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
                <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
                <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
                <Dialog id={dialogsData[5].id} name={dialogsData[5].name}/>
            </ul>

            <ul className={s.messages + ' ' + s.listReset}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </ul>
        </div>
    )
};

export default Dialogs;
