import React, {useRef} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType} from "../../redux/state";

const Dialogs: React.FC<DialogsType> = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} user={m.user}
                                                                          message={m.message}/>);
    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    let addMessage = () => {
        props.addMessageCB();
        // props.updateNewMessageText('');
    }

    let onPostChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current?.value;
            props.updateNewMessageText(text);
        }
    };

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
                    <textarea
                        ref={newMessageElement}
                        value={props.newMessageText}
                        onChange={onPostChange}
                    ></textarea>
                </div>

                <div className={s.submitWrapper}>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </>
    )
};

export default Dialogs;
