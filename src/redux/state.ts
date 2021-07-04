import {v1} from "uuid";

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

export type SiteBarPageType = {
    friends: FriendType[]
}
// -- end --


// state type
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: SiteBarPageType
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
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.newPostText !== undefined) {
                this._state.profilePage.newPostText = action.newPostText;
            }
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText,
                user: 2
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            if (action.newMessageText !== undefined) {
                this._state.dialogsPage.newMessageText = action.newMessageText;
            }
            this._callSubscriber(this._state);
        }
    }
};
// -- end --


// action creators
export const addPostActionCreator = (): ActionType  => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text: string): ActionType  => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text});
export const addMessageActionCreator = (): ActionType  => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextCreator = (text: string): ActionType  => ({type: 'UPDATE-NEW-MESSAGE', newMessageText: text});
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
// @ts-ignore
window.store = store;