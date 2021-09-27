import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import s from "../MyPosts.module.css";

export type PostFormDataType = {
    newPostText: string
}
export const MyPostsForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.wrapperContent}>
            <div className={s.wrapperTextarea}>
                <Field component={"textarea"}
                       placeholder={"...Enter your message"}
                       name={"newPostText"}
                />
            </div>

            <div className={s.wrapperButton}>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<PostFormDataType>({form: "PostForm"})(MyPostsForm)