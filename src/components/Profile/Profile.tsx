import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileStateType} from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from "react-router-dom";

const Profile = (props: ProfileStateType) => {
    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.profile}>

            <ProfileInfo isAuth={props.isAuth} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
