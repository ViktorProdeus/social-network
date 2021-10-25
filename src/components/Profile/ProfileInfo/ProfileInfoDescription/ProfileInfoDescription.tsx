import s from "../ProfileInfo.module.css";
import Social from "../Social/Social";
import { MdWork } from "@react-icons/all-files/md/MdWork";
import React from "react";
import { ProfileType } from "../../../../redux/profile-reducer";

type ProfileInfoDescriptionType = {
    profile: ProfileType
    isEmptySocial: boolean
}

export const ProfileInfoDescription = (props: ProfileInfoDescriptionType) => {
    const {contacts, fullName, aboutMe, lookingForAJob, lookingForAJobDescription,} = props.profile;

    return <div className={s.description}>
        {<h3>About me:</h3>}
        <b className={s.name}>{fullName}</b>
        <p>{!aboutMe ? '- No description -' : aboutMe}</p>
        {props.isEmptySocial ? null : <h3>Contacts:</h3>}

        <Social
            facebook={contacts.facebook}
            vk={contacts.vk}
            twitter={contacts.twitter}
            instagram={contacts.instagram}
            youtube={contacts.youtube}
            github={contacts.github}
        />

        {contacts.mainLink ? <p><b>mainLink - </b> <a className={s.link} target="_blank" rel="noreferrer"
                                                                    href={contacts.mainLink}>{contacts.mainLink}</a>
        </p> : null}
        {contacts.website ? <p><b>website - </b> <a className={s.link} target="_blank" rel="noreferrer"
                                                                  href={contacts.website}>{contacts.website}</a>
        </p> : null}
        {lookingForAJob ?
            <p className={s.work}><MdWork />{lookingForAJobDescription}</p> : null}
    </div>

}