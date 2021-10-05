import React from 'react';
import s from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";

type FormDataType = {
    checkbox: boolean
    password: string
    name: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                text={'Name'}
                name={'name'}
                component={Input}
                validate={[requiredField]}
            />

            <Field
                type={'password'}
                text={'Password'}
                name={'password'}
                component={Input}
                validate={[requiredField]}
            />

            <div className={`${s.formGroup} ${s.formGroup_checkbox}`}>
                <label>
                    <Field name={'checkbox'} component={'input'} type='checkbox' />
                    <span className={s.checkboxText}>remember me</span>
                </label>
            </div>

            <div className={s.formGroup}>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;
