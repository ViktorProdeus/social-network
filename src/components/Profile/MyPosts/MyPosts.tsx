import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MyPostsType} from "../../../redux/state";

const MyPosts: React.FC<MyPostsType> = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likeCount={p.likeCount}/>);
    const newPostElement: React.RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        props.addPostCB();
        // props.updateNewPostText('');
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value;
            props.updateNewPostText(text);
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
                    ></textarea>
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
