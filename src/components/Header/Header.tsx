import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";
import logo from "../../assets/images/logo.svg";


const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ?
                        props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
