import {combineReducers, createStore} from "redux";
import profileReducer, {ProfilePageType} from "./profile-reducer";
import dialogsReducer, {DialogsPageType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {SiteBarType} from "../components/SiteBar/SiteBar";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    siteBar: SiteBarType
}

export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'ADD-MESSAGE' | 'UPDATE-NEW-MESSAGE'
    newPostText?: string
    newMessageText?: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sidebarReducer,
});

let store = createStore(reducers);

// @ts-ignore
window.store = store

export default store;