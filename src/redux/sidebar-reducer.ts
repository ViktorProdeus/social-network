import {v1} from "uuid";


let initialState = {
    friends: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Sveta'},
    ]
};

export type SiteBarType = typeof initialState


const sidebarReducer = (state: SiteBarType = initialState, action: {}): SiteBarType => {

    return state;
}

export default sidebarReducer