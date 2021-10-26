import { authAPI, securityAPI } from "../api/api";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { StateType } from "./redux-store";
import { stopSubmit } from "redux-form";
import { FormAction } from "redux-form/lib/actions";

const SET_USER_DATA = "users/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS';

export type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}


let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    // isFetching: false
};


const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => (
    {
        type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
    } as const);

type ActionSetUserDataType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await authAPI.get();

    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

};

type GetAuthUserDataThunkType = ThunkDispatch<StateType, unknown, ActionsType | FormAction>


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: GetAuthUserDataThunkType) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        await dispatch(getAuthUserData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("Login", {_error: message}));
    }
};

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export type ActionsType = ActionSetUserDataType


export default authReducer;