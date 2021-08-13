const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";


type ActionFollowType = {
    type: typeof FOLLOW
    userID: string
}

type ActionUnfollowType = {
    type: typeof UNFOLLOW
    userID: string
}

type ActionSetUsersType = {
    type: typeof SET_USERS
    users: UserType[]
}

type ActionSetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type ActionSetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

type ActionToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type ActionsType =
    ActionFollowType
    | ActionUnfollowType
    | ActionSetUsersType
    | ActionSetCurrentPageType
    | ActionSetTotalUsersCountType
    | ActionToggleIsFetchingType;

type LocationType = {
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => (u.id === action.userID)
                        ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users
                    .map(u => (u.id === action.userID)
                        ? {...u, followed: false} : u)
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
};

export const followAC = (userID: string) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount
});
export const setToggleFetchingAC = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export default usersReducer;