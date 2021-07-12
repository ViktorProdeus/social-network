import {v1} from "uuid";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export type ActionDialogsType = {
    type: "ADD-MESSAGE" | "UPDATE-NEW-MESSAGE"
    newMessageText: string
}

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageText: string | undefined
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'}
    ],
    messages: [
        {id: v1(), message: 'Hi!', user: 1},
        {id: v1(), message: 'Hi!', user: 2},
        {id: v1(), message: 'How is your it-camasutra?', user: 2},
        {id: v1(), message: 'Perfectly', user: 1},
        {id: v1(), message: 'It\'s amazing', user: 2},
        {id: v1(), message: 'Thanks', user: 1}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action: ActionDialogsType) => {

    switch (action.type) {
        case ADD_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, {
                    id: v1(),
                    message: state.newMessageText,
                    user: 2
                }],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE:

            return {...state, newMessageText: action.newMessageText};

        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessageText: text
});

export default dialogsReducer;