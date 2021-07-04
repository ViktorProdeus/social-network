import React from 'react';
import s from './SiteBar.module.css';
import {Friends} from "../Friends/Friends";
import {SiteBarType} from "../../redux/state";


const SiteBar: React.FC<SiteBarType> = (props) => {
    return (
        <div className={s.siteBar}>
            <Friends friends={props.friends}/>
        </div>
    )
};

export {SiteBar};