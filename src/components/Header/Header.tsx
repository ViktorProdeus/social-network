import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";
import logo from "../../assets/images/logo.svg";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";


const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ?
                        <div className={s.login}>{props.login} <FiLogOut onClick={props.logout}/></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
