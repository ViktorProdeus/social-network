import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (text: string | undefined) => void
}

const MyPosts = (props: MyPostsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);
    const newPostElement = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        let text;
        if (newPostElement.current) text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
