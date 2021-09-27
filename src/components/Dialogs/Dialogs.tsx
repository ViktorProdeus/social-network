import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsType } from "./DialogsContainer";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";

const Dialogs: React.FC<DialogsType> = (props) => {
    const dialogsPage = props.dialogsPage;

    const dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElements = dialogsPage.messages.map(m => <Message key={m.id} id={m.id} user={m.user}
                                                                    message={m.message} />);

    let addNewMessage = (values: { newMessageBody: string }) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <>
            <div className={s.dialogs}>
                <ul className={s.dialogsItems + ' ' + s.listReset}>
                    {dialogsElements}
                </ul>

                <ul className={s.messages + ' ' + s.listReset}>
                    {messagesElements}
                </ul>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage} />
        </>
    )
};


export default Dialogs;
