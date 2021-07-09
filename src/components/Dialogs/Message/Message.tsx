import React from 'react';
import s from './Message.module.css';

export type MessageType = {
    id: string
    message: string | undefined
    user: number
}

const Message: React.FC<MessageType> = (props) => {
    let user = props.user === 1 ? s.user1 : s.user2;

    return (
        <li className={s.message + ' ' + user}>{props.message}</li>
    )
};

export {Message};
