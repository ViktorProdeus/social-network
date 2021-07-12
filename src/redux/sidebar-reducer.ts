import {v1} from "uuid";
import {FriendType} from "../components/Friends/FriendsItem/FriendsItem";

export type SiteBarType = {
    friends: FriendType[]
}

let initialState: SiteBarType = {
    friends: [
        {id: v1(), name: 'Andrew'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Sveta'},
    ]
};

const sidebarReducer = (state = initialState, action: {}) => {

    return state;
}

export default sidebarReducer