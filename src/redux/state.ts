import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

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
}

export type DialogsPageType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
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
        ]

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
        ]
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
export type postMessageCBType = (postMessage: string) => void; // postMessage type
// -- end --


// callback functions
export let addPostCB: postMessageCBType = (postMessage) => {
    let newPost: PostType = {
        id: v1(),
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export const addMessageCB: postMessageCBType = (postMessage) => {
    let newMessage: MessageType = {
        id: v1(),
        message: postMessage,
        user: 2
    };

    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
};
// -- end --


// React components type
export type AppType = {
    state: StateType
    addPostCB: (text: string) => void
    addMessageCB: (text: string) => void
} // App

export type ProfileType = {
    posts: PostType[]
    addPostCB: postMessageCBType
} // Profile

export type DialogsType = {
    dialogsPage: DialogsPageType
    addMessageCB: postMessageCBType
} // Dialogs

export type MyPostsType = {
    posts: PostType[]
    addPostCB: (text: string) => void
} // MyPosts
// -- end --


export default state;