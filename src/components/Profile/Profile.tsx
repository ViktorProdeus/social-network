import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostType>
    addPost: (text: string | undefined) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>

            <MyPosts
                posts={props.posts}
                addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
