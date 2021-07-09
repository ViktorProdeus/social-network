import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';

export type MyPostsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostType[]
    newPostText: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {
    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                     likeCount={p.likeCount}/>);
    const newPostElement: React.RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current?.value;
            props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
