import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

export type MyPostsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsType> = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextCreator(text)
        props.store.dispatch(action);

    };

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};

export default MyPostsContainer;
