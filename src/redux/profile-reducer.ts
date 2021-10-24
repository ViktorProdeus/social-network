import { v1 } from "uuid";
import { profileAPI } from "../api/api";
import { Dispatch } from "redux";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

export type ActionsProfileType = AddPostType
    | UpdatePostType
    | SetUsersType
    | DeletePostType
    | SavePhotoType
    | SetStatusType;

type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}

type UpdatePostType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}

type SetUsersType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

type DeletePostType = {
    type: typeof DELETE_POST
    postId: string
}

type SavePhotoType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
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
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCount: 3},
        {id: v1(), message: 'How is your it-camasutra?', likeCount: 13},
    ],

    profile: null as ProfileType | null,
    status: '',
};

export type ProfilePageType = typeof initialState

const profileReducer = (state: ProfilePageType = initialState, action: ActionsProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            };

            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        }

        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            };
        }

        case SAVE_PHOTO_SUCCESS:
            return {...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            }

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText: string): AddPostType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUsersType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status});
export const deletePost = (postId: string) => ({type: DELETE_POST, postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

export const getUserProfile = (userID: string) => async (dispatch: Dispatch<ActionsProfileType>) => {
    const data = await profileAPI.get(userID);
    dispatch(setUserProfile(data));
}
export const getStatus = (userID: string) => async (dispatch: Dispatch<ActionsProfileType>) => {
    const data = await profileAPI.getStatus(userID);
    dispatch(setStatus(data));
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsProfileType>) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: string) => async (dispatch: Dispatch<ActionsProfileType>) => {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;