import { ThunkDispatch } from "redux-thunk";
import { StateType } from "./redux-store";
import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "app/SET-INITIALIZED-SUCCESS";

let initialState = {
    initialized: false,
};

export type initialStateType = typeof initialState

const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
};

export const initializesSuccess = () => ({
    type: SET_INITIALIZED_SUCCESS,
} as const);

type InitializesSuccessType = ReturnType<typeof initializesSuccess>

type InitializeAppThunkType = ThunkDispatch<StateType, unknown, ActionsType>

export const initializeApp = () => async (dispatch: InitializeAppThunkType) => {
    const promise = dispatch(getAuthUserData());

    await Promise.all([promise])
    dispatch(initializesSuccess());
};


export type ActionsType = InitializesSuccessType


export default appReducer;