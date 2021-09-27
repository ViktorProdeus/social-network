import { Field, InjectedFormProps, reduxForm } from "redux-form";
import React from "react";
import s from "../Dialogs.module.css";

export type FormDataType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messenger}>
            <div className={s.textareaWrapper}>
                <Field component={"textarea"}
                       placeholder={"...Enter your message"}
                       name={"newMessageBody"}
                />
            </div>

            <div className={s.submitWrapper}>
                <button>Send</button>
            </div>
        </form>
    );
};
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);