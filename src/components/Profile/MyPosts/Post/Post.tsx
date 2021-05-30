import React from 'react';
import s from './Post.module.css';

type postType = {
    message: string
    likeCount: number
}

const Post = (props: postType) => {

    return (
        <div className={s.item}>
            <img src='https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png' alt={'avatar'}/>
            {props.message}
            <div>
                <span>&#x2665;</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;