import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";


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

type ActionToggleIsFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: string
}

type ActionsUsersType =
    ActionFollowType
    | ActionUnfollowType
    | ActionSetUsersType
    | ActionSetCurrentPageType
    | ActionSetTotalUsersCountType
    | ActionToggleIsFetchingType
    | ActionToggleIsFollowingProgressType;

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

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as string[]
}

export type UsersPageType = typeof initialState

const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersType): UsersPageType => {
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

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const followSuccess = (userID: string): ActionFollowType => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID: string): ActionUnfollowType => ({type: UNFOLLOW, userID});
export const setUsers = (users: UserType[]): ActionSetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): ActionSetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount: number): ActionSetTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const toggleIsFetching = (isFetching: boolean): ActionToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching: boolean, userId: string): ActionToggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


// ThunkCreators

export const requestUsers = (page: number, pageSize: number) => {

    return (dispatch: Dispatch<ActionsUsersType>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then((data) => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userId: string) => {
    return (dispatch: Dispatch<ActionsUsersType>) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId));
            });
    }
}

export const unfollow = (userId: string) => {
    return (dispatch: Dispatch<ActionsUsersType>) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingInProgress(false, userId));
        });
    }
}

export default usersReducer;