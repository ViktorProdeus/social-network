import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";


const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img src='https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg' alt={'logo'}/>
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
