import React from 'react';
import s from './Login.module.css';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validator";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { StateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type FormDataType = {
    captchaUrl: string
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("text", "Email", "email", [requiredField], Input)}
            {createField("password", "password", "password", [requiredField], Input)}

            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl && createField("text","Symbols from image", "captcha", [requiredField], Input)}

            <div className={`${s.formGroup} ${s.formGroup_checkbox}`}>
                <label className={s.checkbox}>
                    <Field name={'rememberMe'} component={'input'} type='checkbox' />
                    <span className={s.checkboxText}>remember me</span>
                </label>
            </div>

            <div className={s.formSummaryError}>
                {error}
            </div>

            <div className={s.formGroup}>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'Login'})(LoginForm);

const Login: React.FC<mapDispatchToPropsType & mapStateToPropsType> = ({isAuth, login, captchaUrl} ) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl);
    }

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <div className={s.inner}>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
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
    captchaUrl: state.auth.captchaUrl,
})

type mapStateToPropsType = ReturnType<typeof mapStateToProps>

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


export default connect(mapStateToProps, {login}) (Login);
