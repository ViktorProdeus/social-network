import React from 'react';
import s from './MyPosts.module.css';
import Post, { PostType } from './Post/Post';
import { AddPostFormRedux } from "./MyPostsForm/MyPostsForm";

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

    const postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />)


    let addPostText = (values: { newPostText: string }) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapperMessenger}>
                <h3>My posts</h3>

                <AddPostFormRedux onSubmit={addPostText} />
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;
