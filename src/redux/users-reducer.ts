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
    photos: {
        small: string
        large: string
    }
    name: string
    status: string
    followed: boolean
    location: LocationType
}
export type UsersPageType = {
    users: UserType[]
}

let initialState: UsersPageType = {
    users: []
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
                ...state, users: [...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID: string) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users});

export default usersReducer;