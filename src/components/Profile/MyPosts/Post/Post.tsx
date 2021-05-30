import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";

const Post = (props: PostType) => {

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
