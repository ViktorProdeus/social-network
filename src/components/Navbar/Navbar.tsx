import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SiteBar} from "../SiteBar/SiteBar";
import {SiteBarPageType} from "../../redux/state";

const Navbar: React.FC<SiteBarPageType> = (props) => {
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>

                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
                </div>
            </nav>

            <SiteBar friends={props.friends} />
        </div>
    )
}

export default Navbar;
