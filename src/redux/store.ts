import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StateType, StoreType} from "./redux-store";

// store
let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likeCount: 3},
                {id: v1(), message: 'How is your it-camasutra?', likeCount: 13},
            ],
            newPostText: ''

        },
        dialogsPage: {
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
        },
        siteBar: {
            friends: [
                {id: v1(), name: 'Andrew'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Sveta'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.siteBar = sidebarReducer(this._state.siteBar, action);
        this._callSubscriber(this._state);
    }
};


export default store;