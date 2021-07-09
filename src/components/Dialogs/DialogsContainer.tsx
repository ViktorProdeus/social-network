import React from "react";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

export type DialogsType = {
    store: StoreType
}

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store)=> {
                    const dialogsPage = store.getState().dialogsPage;
                    const dispatch = store.dispatch;

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
            }}

        </StoreContext.Consumer>
    )
};

export default DialogsContainer;
