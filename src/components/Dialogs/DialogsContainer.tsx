import React from "react";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";

export type DialogsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsType> = (props) => {
    const dialogsPage = props.store.getState().dialogsPage;
    const dispatch = props.store.dispatch;

    let addMessage = () => {
        dispatch(addMessageActionCreator());
    }

    let onPostChange = (text: string) => {
        dispatch(updateNewMessageTextCreator(text));
    };

    return (
        <Dialogs
            updateNewMessageText={onPostChange}
            sendMessage={addMessage}
            dialogsPage={dialogsPage}
        />
    )
};

export default DialogsContainer;
