import {combineReducers, createStore} from "redux";
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import sidebarReducer, {SiteBarType} from "./sidebar-reducer";
import usersReducer, {UsersPageType} from "./users-reducer";
import authReducer, {AuthStateType} from "./auth-reducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: SiteBarType
    usersPage: UsersPageType
    auth: AuthStateType
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

// @ts-ignore
window.store = store

export default store;