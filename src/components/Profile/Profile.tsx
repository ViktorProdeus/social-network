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
                addPostCB={props.addPostCB}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;
