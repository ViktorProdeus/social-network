import React from 'react';
import s from './Post.module.css';

export type PostType = {
    id: string
    message: string | undefined
    likeCount: number
}

const Post: React.FC<PostType> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://cva.ukzn.ac.za/wp-content/uploads/2019/07/profile-placeholder.png' alt={'avatar'}/>
            <p>{props.message}</p>
            <div>
                <span className={s.like}>&#x2665;</span> {props.likeCount}
            </div>
        </div>
    )
}

export default Post;
