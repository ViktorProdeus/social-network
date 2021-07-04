import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

// state item type
export type PostType = {
    id: string
    message: string
    likeCount: number
}

export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
    user: number
}

export type FriendType = {
    id: string
    name: string
}
// -- end --


// state page type
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    newMessageText: string
}

export type SiteBarType = {
    friends: FriendType[]
}
// -- end --


// state type
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: SiteBarType
}

export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'ADD-MESSAGE' | 'UPDATE-NEW-MESSAGE'
    newPostText?: string
    newMessageText?: string
}

// store type
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}
// -- end --

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
// -- end --


// React components type
export type AppType = {
    store: StoreType
} // App

export type ProfileType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
} // Profile

export type DialogsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: ActionType) => void
} // Dialogs

export type MyPostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
} // MyPosts
// -- end --


export default store;