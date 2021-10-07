import React from 'react';
import s from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validator";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type FormDataType = {
    rememberMe: boolean
    password: string
    email: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                text={'Email'}
                name={'email'}
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
                    <Field name={'rememberMe'} component={'input'} type='checkbox' />
                    <span className={s.checkboxText}>remember me</span>
                </label>
            </div>

            <div className={s.formGroup}>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm);

const Login = (props: mapDispatchToPropsType & mapStateToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <div className={s.inner}>
                <LoginReduxForm onSubmit={onSubmit} />
                <div>
                    <p>To login, enter test e-mails and password:</p>
                    <p>Email: <span>free@samuraijs.com</span></p>
                    <p>Password: <span>free</span></p>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
})

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}


export default connect(mapStateToProps, {login}) (Login);
