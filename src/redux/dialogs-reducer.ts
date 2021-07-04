import {v1} from "uuid";
import {ActionType, DialogsPageType, MessageType} from "./state";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
                user: 2
            };

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            if (action.newMessageText !== undefined) {
                state.newMessageText = action.newMessageText;
            }
            return state;

        default:
            return state;
    }
};

export const addMessageActionCreator = (): ActionType => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextCreator = (text: string): ActionType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessageText: text
});

export default dialogsReducer;