import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

export type ActionsDialogsType = ActionAddMessageType | ActionUpdateNewMessageType

type ActionAddMessageType = {
    type: typeof ADD_MESSAGE
}

type ActionUpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE
    newMessageText: string
}

let initialState = {
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

export type DialogsPageType = typeof initialState

const dialogsReducer = (state : DialogsPageType = initialState, action: ActionsDialogsType): DialogsPageType => {

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

export const addMessageActionCreator = (): ActionAddMessageType => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (text: string): ActionUpdateNewMessageType => ({
    type: UPDATE_NEW_MESSAGE,
    newMessageText: text
});

export default dialogsReducer;