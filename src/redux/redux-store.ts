import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type StateType = ReturnType<typeof reducers>




let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store

export default store;