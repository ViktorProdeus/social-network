import React from 'react';
import s from './SiteBar.module.css';
import {Friends} from "../Friends/Friends";
import {siteBarType} from "../../redux/state";

const SiteBar = (props: siteBarType) => {
    return (
        <div className={s.siteBar}>
            <Friends friends={props.friends}/>
        </div>
    )
};

export {SiteBar};