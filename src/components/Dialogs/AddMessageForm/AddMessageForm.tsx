import { Field, InjectedFormProps, reduxForm } from "redux-form";
import React from "react";
import s from "../Dialogs.module.css";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";

export type FormDataType = {
    newMessageBody: string
}

const maxLength100 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.messenger}>
            <Field component={Textarea}
                   placeholder={"...Enter your message"}
                   name={"newMessageBody"}
                   validate={[requiredField, maxLength100]}
            />

            <div className={s.submitWrapper}>
                <button>Send</button>
            </div>
        </form>
    );
};
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);