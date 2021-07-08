import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts: React.FC<MyPostsType> = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likeCount={p.likeCount}/>);
    const newPostElement: React.RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value;
            let action = updateNewPostTextCreator(text)
            props.dispatch(action);
        }
    };

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
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
