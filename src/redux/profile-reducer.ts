import {v1} from "uuid";
import {PostType} from "../components/Profile/MyPosts/Post/Post";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

export type ActionProfileType = AddPostType | UpdatePostType | SetUsersType

type AddPostType = {
    type: typeof ADD_POST
}

type UpdatePostType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}

type SetUsersType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": PhotosType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string | undefined
    profile: ProfileType | null
}

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 3},
        {id: v1(), message: 'How is your it-camasutra?', likeCount: 13},
    ],
    newPostText: '',
    profile: null as ProfileType | null

};
const profileReducer = (state = initialState, action: ActionProfileType) => {
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

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (): AddPostType => ({type: ADD_POST});
export const setUserProfile = (profile: ProfileType): SetUsersType => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextCreator = (text: string): UpdatePostType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});

export default profileReducer;