import React from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <header className='header'>
      <Link to={'/'} className='header__link' >Главная</Link>
      <Link to={'/catalog'} className='header__link' >Каталог</Link>
      <Link to={'/cart'} className='header__link' >Корзина</Link>
      <Link to={'/profile'} className='header__link' >Профиль</Link>
    </header>
  )
}
