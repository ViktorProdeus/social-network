import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.meme-arsenal.com/memes/e207dd3d241976dcbca5fefcd1bfdc70.jpg' alt={'logo'}/>
        </header>
    )
}

export default Header;
