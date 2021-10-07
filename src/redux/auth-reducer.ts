import { authAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { StateType } from "./redux-store";

const SET_USER_DATA = "users/SET-USER-DATA";

export type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
};


const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
};

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        id, email, login, isAuth
    }
} as const);

type ActionSetUserDataType = ReturnType<typeof setAuthUserData>

export const getAuthUserData = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.get().then(response => {
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
};

type GetAuthUserDataThunkType = ThunkDispatch<StateType, unknown, ActionType>


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: GetAuthUserDataThunkType) => {
    authAPI.login(email, password, rememberMe).then(response => {

        if (response.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};

export type LoginType = ReturnType<typeof login>

export const logout = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.logout().then(response => {

        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};

export type ActionType = ActionSetUserDataType


export default authReducer;