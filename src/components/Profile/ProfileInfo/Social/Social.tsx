import React from 'react';
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { FaVk } from "@react-icons/all-files/fa/FaVk";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaYoutubeSquare } from "@react-icons/all-files/fa/FaYoutubeSquare";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
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
    const socialList = [
        {item: props.facebook, icon: <AiOutlineFacebook />},
        {item: props.vk, icon: <FaVk />},
        {item: props.twitter, icon: <FaTwitter />},
        {item: props.instagram, icon: <FaInstagram />},
        {item: props.youtube, icon: <FaYoutubeSquare />},
        {item: props.github, icon: <FaGithub />},
    ];

    return (
        <ul className={s.social}>
            {socialList.map((item, index) => {
                return (
                    item.item ? <a key={index} className={s.link} target="_blank" rel="noreferrer" href={item.item}><li>{item.icon}</li></a> : null
                )
            })}
        </ul>
    )
}

export default Social;
