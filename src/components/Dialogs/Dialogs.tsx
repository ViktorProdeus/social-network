import React, {useRef} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../redux/state";

type DialogsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    addMessage: (text: string | undefined) => void
}

const Dialogs = (props: DialogsType) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    const messagesElements = props.messages.map(m => <Message user={m.user} message={m.message}/>);
    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    let addMessage = () => {
        debugger
        let text;
        if(newMessageElement.current) text = newMessageElement.current.value;
        props.addMessage(text);
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

            <div className={s.messenger}>
                <div className={s.textareaWrapper}>
                    <textarea ref={newMessageElement}></textarea>
                </div>

                <div className={s.submitWrapper}>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </>
    )
};

export default Dialogs;
