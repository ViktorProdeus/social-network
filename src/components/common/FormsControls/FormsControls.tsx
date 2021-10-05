import React from 'react';
import styles from './FormsControls.module.css';
import { WrappedFieldProps } from "redux-form";

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

export const Input = (props: WrappedFieldProps & OwnPropsType) => {
    const {input, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;

    return (
        <FormControl {...props}>
            <label>
                <span>{props.text}</span>
                <br />
                <input {...input} {...restProps} />
                <br />
                <span>{hasError && meta.error}</span>
            </label>
        </FormControl>
    )
}
