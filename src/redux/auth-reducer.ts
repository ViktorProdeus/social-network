import { authAPI } from "../api/api";
import { Dispatch } from "redux";

const SET_USER_DATA = "users/SET-USER-DATA";

type ActionSetUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        id: string | null
        email: string | null
        login: string | null
    }

}

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


const authReducer = (state: AuthStateType = initialState, action: ActionSetUserDataType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}

        default:
            return state;
    }
};

export const setAuthUserData = (id: string, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {
        id, email, login
    }
} as const);


export const getAuthUserData = () => (dispatch: Dispatch<ActionSetUserDataType>) => {
    authAPI.get().then(response => {
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
};


export default authReducer;