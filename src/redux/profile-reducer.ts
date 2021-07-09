import {v1} from "uuid";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ActionType} from "./redux-store";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string | undefined
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 3},
        {id: v1(), message: 'How is your it-camasutra?', likeCount: 13},
    ],
    newPostText: ''

};
const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newPostText
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (): ActionType => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text: string): ActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;