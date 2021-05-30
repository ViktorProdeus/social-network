import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 3},
        {id: 2, message: 'How is your it-camasutra?', likeCount: 13},
    ];

    const postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return (
        <div className={s.wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;