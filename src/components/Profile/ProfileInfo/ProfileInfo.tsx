import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import PhotoDefault from "../../../assets/images/avatar.png";
import Preloader from "../../common/Preloader/Preloader";
import bgImage from "../../../assets/images/profile-image.jpg";
import { MapPropsType } from "../ProfileContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { ProfileInfoDescription } from "./ProfileInfoDescription/ProfileInfoDescription";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import { ProfileType } from "../../../redux/profile-reducer";


type PropsType = MapPropsType & {
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: string) => void
    updateStatus: (status: string) => void
    isOwner: boolean
};

const ProfileInfo = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false);

    const {
        profile,
        status,
        updateStatus,
        isOwner,
        saveProfile,
    } = props;

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    const {contacts, photos} = profile

    let isEmptySocial = (!contacts.facebook
        && !contacts.vk
        && !contacts.mainLink
        && !contacts.github
        && !contacts.twitter
        && !contacts.instagram
        && !contacts.website);

    return (
        <div>
            <div className={s.preview}>
                <img src={bgImage} alt={'background'} />
            </div>

            <div className={s.wrapper}>
                <div className={s.person}>
                    <div className={s.leftSide}>
                        <img className={s.photo} src={photos.large || PhotoDefault} width="300" alt="ava" />
                        {isOwner && <div className={s.fileBlock}><input type={'file'} onChange={onMainPhotoSelected} /></div>}
                        {isOwner && <div className={s.editBtn}><button onClick={() => setEditMode(true)}>edit description</button></div>}
                    </div>

                    {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} /> :
                        <ProfileInfoDescription
                            profile={profile}
                            isEmptySocial={isEmptySocial}
                        />}
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>

        </div>
    )
}

export default ProfileInfo;
