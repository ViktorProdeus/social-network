import React from 'react';
import {AiOutlineFacebook} from "@react-icons/all-files/ai/AiOutlineFacebook";
import {FaVk} from "@react-icons/all-files/fa/FaVk";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaYoutubeSquare} from "@react-icons/all-files/fa/FaYoutubeSquare";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import s from './Social.module.css'

type PropsType = {
    facebook: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
}

const Social = (props: PropsType) => {

    return (
        <ul className={s.social}>
            {props.facebook ? <li><AiOutlineFacebook/>{props.facebook}</li> : null}
            {props.vk ? <li><FaVk/>{props.vk}</li> : null}
            {props.twitter ? <li><FaTwitter/>{props.twitter}</li> : null}
            {props.instagram ? <li><FaInstagram/>{props.instagram}</li> : null}
            {props.youtube ? <li><FaYoutubeSquare/>{props.youtube}</li> : null}
            {props.github ? <li><FaGithub/>{props.github}</li> : null}
        </ul>
    )
}

export default Social;
