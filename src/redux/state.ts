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

// store type
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    addPostCB: () => void
    updateNewPostText: (newText: string) => void
    addMessageCB: () => void
    updateNewMessageText: (newMessage: string) => void
    subscribe: (observer: (state: StateType) => void) => void
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
            newPostText: 'it.camasutra.com'

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
            newMessageText: 'my friends'
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

    addPostCB() {
        let newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessageCB() {
        let newMessage: MessageType = {
            id: v1(),
            message: this._state.dialogsPage.newMessageText,
            user: 2
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
};

// -- end --


// callback functions types
export type postMessageCBType = () => void; // postMessage type
// -- end --


// React components type
export type AppType = {
    state: StateType
    addPostCB: () => void
    addMessageCB: () => void
    updateNewPostText: (value: string) => void
    updateNewMessageText: (value: string) => void
} // App

export type ProfileType = {
    posts: PostType[]
    addPostCB: postMessageCBType
    updateNewPostText: (value: string) => void
    newPostText: string
} // Profile

export type DialogsType = {
    dialogsPage: DialogsPageType
    addMessageCB: postMessageCBType
    updateNewMessageText: (value: string) => void
    newMessageText: string
} // Dialogs

export type MyPostsType = {
    posts: PostType[]
    addPostCB: () => void
    updateNewPostText: (value: string) => void
    newPostText: string
} // MyPosts
// -- end --


export default store;
// @ts-ignore
window.store = store;