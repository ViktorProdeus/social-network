import {v1} from "uuid";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type ActionUsersType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS"
    users: UserType[]
    userID?: string
}

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    photoUrl: string
    fullName: string
    status: string
    followed: boolean
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
}

let initialState: UsersPageType = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://cdna.artstation.com/p/assets/images/images/000/082/308/medium/Capface.jpg?1443930786',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://www.vokrug.tv/pic/person/1/0/b/a/10ba699a3bca946690a61476ad7a5a32.jpeg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(),
            photoUrl: 'https://www.vokrug.tv/pic/person/4/c/3/8/4c385380340d56acd318cf77d7777924.jpeg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]

};
const usersReducer = (state = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID: string) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: UserType) => ({type: SET_USERS, users});

export default usersReducer;