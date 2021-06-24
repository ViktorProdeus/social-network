import {v1} from "uuid";

let rerenderEntireTree = (state: StateType) => {
    console.log('state was changed');
};

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
// -- end --


// state
let state: StateType = {
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
};
// -- end --


// callback functions types
export type postMessageCBType = () => void; // postMessage type
// -- end --


// callback functions
export const addPostCB: postMessageCBType = () => {
    let newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessageCB: postMessageCBType = () => {
    let newMessage: MessageType = {
        id: v1(),
        message: state.dialogsPage.newMessageText,
        user: 2
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer: (state: StateType)=> void) => {
    rerenderEntireTree = observer;
};
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

// @ts-ignore
window.state = state;
export default state;