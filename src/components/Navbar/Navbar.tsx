import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SiteBarContainer from "../SiteBar/SiteBarContainer";

const Navbar = () => {
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
                    <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
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

                <div className={s.item}>
                    <NavLink to='/login' activeClassName={s.activeLink}>Login</NavLink>
                </div>
            </nav>

            <SiteBarContainer/>
        </div>
    )
}

export default Navbar;
