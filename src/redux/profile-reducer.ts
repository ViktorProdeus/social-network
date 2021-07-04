import {v1} from "uuid";
import {ActionType, PostType, ProfilePageType} from "./state";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            if (action.newPostText !== undefined) {
                state.newPostText = action.newPostText;
            }
            return state;

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