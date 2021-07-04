import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

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
