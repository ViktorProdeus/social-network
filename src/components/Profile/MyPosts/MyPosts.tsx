import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: PostType[]
    newPostText: string | undefined
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
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
            <div className={s.wrapperMessenger}>
                <h3>My posts</h3>

            <div className={s.wrapperContent}>
                <div className={s.wrapperTextarea}>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>

                <div className={s.wrapperButton}>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
