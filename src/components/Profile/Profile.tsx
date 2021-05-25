import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div className={s.preview}>
        <img src='https://playprint.ru/images/catalog/categories/category-marvel-bg.jpg' alt={'background'}/>
      </div>
      <div className={s.wrapper}>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
