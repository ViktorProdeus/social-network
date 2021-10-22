import { usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";


type ActionFollowType = {
    type: typeof FOLLOW
    followed: boolean
    userID: string
}


type ActionUnfollowType = {
    type: typeof UNFOLLOW
    followed: boolean
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
    followingInProgress: [] as string[],
    fake: 10
}

export type UsersPageType = typeof initialState

const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
        case UNFOLLOW:
            return {
                ...state,
                //refactoring
                users: updateObjectInArray(state.users, action.userID,"id", {followed: action.followed})
                // * without refactoring *
                    // state.users
                    // .map(u => (u.id === action.userID)
                    //     ? {...u, followed: action.followed} : u)
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

export const followSuccess = (userID: string): ActionFollowType => ({
    type: FOLLOW,
    followed: true,
    userID
});
export const unfollowSuccess = (userID: string): ActionUnfollowType => ({
    type: UNFOLLOW,
    followed: false,
    userID
});
export const setUsers = (users: UserType[]): ActionSetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): ActionSetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalCount: number): ActionSetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount
});
export const toggleIsFetching = (isFetching: boolean): ActionToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowingInProgress = (isFetching: boolean, userId: string): ActionToggleIsFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


// ThunkCreators

export const requestUsers = (page: number, pageSize: number) => {

    return async (dispatch: Dispatch<ActionsUsersType>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsUsersType>, userId: string, apiMethod:(userId: string) => Promise<any>, actionCreator: (userID: string) => ActionFollowType | ActionUnfollowType) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId: string) => {
    const apiMethod = usersAPI.follow.bind(usersAPI);
    const actionCreator = followSuccess;

    return async (dispatch: Dispatch<ActionsUsersType>) => {
        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
    // (dispatch: Dispatch<ActionsUsersType>) => {
    //     dispatch(toggleFollowingInProgress(true, userId));
    //     const data = await apiMethod(userId);
    //
    //     if (data.resultCode === 0) {
    //         dispatch(actionCreator(userId));
    //     }
    //     dispatch(toggleFollowingInProgress(false, userId));
    // }
}

export const unfollow = (userId: string) => {
    const apiMethod = usersAPI.unfollow.bind(usersAPI);
    const actionCreator = unfollowSuccess;

    return async (dispatch: Dispatch<ActionsUsersType>) => {
        await followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }

    //     dispatch(toggleFollowingInProgress(true, userId));
    //     const data = await apiMethod(userId);
    //
    //     if (data.resultCode === 0) {
    //         dispatch(actionCreator(userId));
    //     }
    //     dispatch(toggleFollowingInProgress(false, userId));
    // }
}

export default usersReducer;