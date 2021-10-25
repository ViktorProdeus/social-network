import React from "react";

import { createField, Input } from "../../../common/FormsControls/FormsControls";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import s from "./ProfileDataForm.module.css";
import { ProfileType } from "../../../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType
}


const ProfileDataForm = (props: InjectedFormProps<ProfileType, PropsType> & PropsType ) => {
    return <form className={s.form} onSubmit={props.handleSubmit}>
        <div className={s.saveBtn}>
            <button>save</button>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
        </div>

        <div className={s.fullName}>
            <b>{createField("text", "fullName:", "fullName", [], Input)}</b>
        </div>
        <div className={s.lookingForAJob}>
            <label className={s.checkbox}>
                <Field name={'lookingForAJob'} component={'input'} type='checkbox' />
                <span className={s.checkboxText}><b>lookingForAJob</b></span>
            </label>
        </div>
        <div className={s.lookingForAJobDescription}>
            <b>{createField("text",  "My professional skills:", "lookingForAJobDescription", [], Input)}</b>
        </div>

        <div className={s.aboutMe}>
            <b>{createField("text", "About me:", "AboutMe", [], Input)}</b>
        </div>

        <div className={s.contacts}>
            <b className={s.contactsHeading}>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{createField("text", key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}


const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;