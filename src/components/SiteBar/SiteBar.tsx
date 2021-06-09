import React from 'react';
import s from './SiteBar.module.css';
import {Friends} from "../Friends/Friends";
import {SiteBarPageType} from "../../redux/state";


const SiteBar: React.FC<SiteBarPageType> = (props ) => {
    return (
        <div className={s.siteBar}>
            <Friends friends={props.friends}/>
        </div>
    )
};

export {SiteBar};