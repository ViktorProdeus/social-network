import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionType} from "../../redux/redux-store";

export type ProfileType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>

            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;
