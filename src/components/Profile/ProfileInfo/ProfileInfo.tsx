import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.preview}>
        <img src='https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg' alt={'background'}/>
      </div>
      <div className={s.wrapper}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
