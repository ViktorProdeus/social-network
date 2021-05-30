export type DialogItemType = {
    id: number
    name: string
}

export type MessageType = {
    id?: number
    message: string
    user: 1 | 2
}

export type PostType = {
    id?: number
    message: string
    likeCount: number
}

export type FriendsItemType = {
    id: number
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
            {id: 1, message: 'Hi, how are you?', likeCount: 3},
            {id: 2, message: 'How is your it-camasutra?', likeCount: 13},
        ]

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi!', user: 1},
            {id: 2, message: 'Hi!', user: 2},
            {id: 3, message: 'How is your it-camasutra?', user: 2},
            {id: 4, message: 'Perfectly', user: 1},
            {id: 5, message: 'It\'s amazing', user: 2},
            {id: 6, message: 'Thanks', user: 1}
        ]
    },
    siteBar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    }

};

export default state;