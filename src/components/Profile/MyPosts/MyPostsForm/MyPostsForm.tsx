import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import s from "../MyPosts.module.css";
import { maxLengthCreator, requiredField } from "../../../../utils/validators/validator";
import { Textarea } from "../../../common/FormsControls/FormsControls";

export type PostFormDataType = {
    newPostText: string
}
const maxLengthCreator10 = maxLengthCreator(10);

export const MyPostsForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.wrapperContent}>
            <Field component={Textarea}
                   placeholder={"...Enter your message"}
                   name={"newPostText"}
                   validate={[requiredField, maxLengthCreator10]}
            />

            <div className={s.wrapperButton}>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const AddPostFormRedux = reduxForm<PostFormDataType>({form: "PostForm"})(MyPostsForm)