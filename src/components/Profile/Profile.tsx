import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileStateType} from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: ProfileStateType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
