import React from 'react';
import s from './ProfileInfo.module.css';
import PhotoDefault from "../../../assets/images/avatar.png";
import {MdWork} from "@react-icons/all-files/md/MdWork";
import Preloader from "../../common/Preloader/Preloader";
import Social from "./Social/Social";
import bgImage from "../../../assets/images/profile-image.jpg";
import ProfileStatus from "./ProfileStatus";
import {MapPropsType} from "../ProfileContainer";

type PropsType = MapPropsType & {
    updateStatus: (status: string) => void
};

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let isEmptySocial = (!props.profile.contacts.facebook
        && !props.profile.contacts.vk
        && !props.profile.contacts.mainLink
        && !props.profile.contacts.github
        && !props.profile.contacts.twitter
        && !props.profile.contacts.instagram
        && !props.profile.contacts.website)

    return (
        <div>
            <div className={s.preview}>
                <img src={bgImage} alt={'background'}/>
            </div>

            <div className={s.wrapper}>
                <div className={s.person}>
                    <img className={s.photo} src={props.profile.photos.large || PhotoDefault} width="300" alt="ava"/>
                    <div className={s.description}>
                        {<h3>About me:</h3>}
                        <b className={s.name}>{props.profile.fullName}</b>
                        <p>{!props.profile.aboutMe ? '- No description -' : props.profile.aboutMe}</p>
                        {isEmptySocial ? null : <h3>Contacts:</h3>}

                        <Social
                            facebook={props.profile.contacts.facebook}
                            vk={props.profile.contacts.vk}
                            twitter={props.profile.contacts.twitter}
                            instagram={props.profile.contacts.instagram}
                            youtube={props.profile.contacts.youtube}
                            github={props.profile.contacts.github}
                        />

                        {props.profile.contacts.mainLink ? <p><b>mainLink - </b> {props.profile.contacts.mainLink}</p> : null}
                        {props.profile.contacts.website ? <p><b>website - </b> {props.profile.contacts.website}</p> : null}
                        {props.profile.lookingForAJob ? <p className={s.work}><MdWork/>{props.profile.lookingForAJobDescription}</p> : null}
                    </div>
                </div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;
