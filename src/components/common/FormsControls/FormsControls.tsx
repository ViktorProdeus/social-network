import React, { FC } from 'react';
import styles from './FormsControls.module.css';
import { Field, WrappedFieldProps } from "redux-form";
import { RequiredFieldType } from "../../../utils/validators/validator";

export const FormControl: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${styles.formControl} ${styles.error}` : styles.formControl}>
            {props.children}
        </div>
    )
};

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;

    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
            <span>{hasError && meta.error}</span>
        </FormControl>
    )
}

type OwnPropsType = {
    text: string
}

export const Input: React.FC<WrappedFieldProps & OwnPropsType> = (props) => {
    const {input, meta: {touched, error}, text, ...restProps} = props;
    const hasError = touched && error;

    return (
        <FormControl {...props}>
            <label>
                <span>{text}</span>
                <br />
                <input {...input} {...restProps} />
                <br />
                <span>{hasError && error}</span>
            </label>
        </FormControl>
    )
}

export const createField = (type: 'text' | 'password', text: string, name: string, validators: RequiredFieldType[], component: FC<WrappedFieldProps & OwnPropsType>) => (
    <>
        <Field
            type={type}
            text={text}
            name={name}
            component={component}
            validate={validators}
        />
    </>
)
