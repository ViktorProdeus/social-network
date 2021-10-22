import React from 'react';
import s from './ProfileInfo.module.css';
import PhotoDefault from "../../../assets/images/avatar.png";
import { MdWork } from "@react-icons/all-files/md/MdWork";
import Preloader from "../../common/Preloader/Preloader";
import Social from "./Social/Social";
import bgImage from "../../../assets/images/profile-image.jpg";
import { MapPropsType } from "../ProfileContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type PropsType = MapPropsType & {
    updateStatus: (status: string) => void
};

const ProfileInfo = (props: PropsType) => {
    const {
        profile,
        status,
        updateStatus,
    } = props;

    if (!profile) {
        return <Preloader/>
    }

    const {contacts, photos, fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = profile

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
                <img src={bgImage} alt={'background'}/>
            </div>

            <div className={s.wrapper}>
                <div className={s.person}>
                    <img className={s.photo} src={photos.large || PhotoDefault} width="300" alt="ava"/>
                    <div className={s.description}>
                        {<h3>About me:</h3>}
                        <b className={s.name}>{fullName}</b>
                        <p>{!aboutMe ? '- No description -' : aboutMe}</p>
                        {isEmptySocial ? null : <h3>Contacts:</h3>}

                        <Social
                            facebook={contacts.facebook}
                            vk={contacts.vk}
                            twitter={contacts.twitter}
                            instagram={contacts.instagram}
                            youtube={contacts.youtube}
                            github={contacts.github}
                        />

                        {contacts.mainLink ? <p><b>mainLink - </b> {contacts.mainLink}</p> : null}
                        {contacts.website ? <p><b>website - </b> {contacts.website}</p> : null}
                        {lookingForAJob ? <p className={s.work}><MdWork/>{lookingForAJobDescription}</p> : null}
                    </div>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;
