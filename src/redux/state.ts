import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export type DialogItemType = {
    id: string
    name: string
}

export type MessageType = {
    id?: string
    message: string | undefined
    user: 1 | 2
}

export type PostType = {
    id?: string
    message: string | undefined
    likeCount: number
}

export type FriendsItemType = {
    id: string
    name: string
}

export type siteBarType = {
    friends: Array<FriendsItemType>
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: siteBarType
}

let state: AppStateType = {
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

export let addPost = (postMessage: string | undefined) => {
    let newPost = {
        id: v1(),
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export let addMessage = (postMessage: string | undefined) => {
    debugger
    let newMessage: MessageType = {
        id: v1(),
        message: postMessage,
        user: 2
    };

    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
};

export default state;