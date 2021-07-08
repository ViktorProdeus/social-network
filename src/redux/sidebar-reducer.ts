import {ActionType, SiteBarType} from "./store";
import {v1} from "uuid";

let initialState: SiteBarType = {
    friends: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Sveta'},
    ]
};

const sidebarReducer = (state = initialState, action: ActionType) => {

    return state;
}

export default sidebarReducer