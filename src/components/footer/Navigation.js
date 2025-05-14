import React from 'react'
import { Link } from 'react-router-dom';


export const Navigation = () => {
  return (
    <div className='footer__navigation'>
      <h3>Навигация</h3>
      <Link style={{ color: 'black' }} to={'/'} className='footer__navigation_link' >Главная</Link>
      <Link style={{ color: 'black' }} to={'/catalog'} className='footer__navigation_link' >Каталог</Link>
      <Link style={{ color: 'black' }} to={'/cart'} className='footer__navigation_link' >Корзина</Link>
      <Link style={{ color: 'black' }} to={'/profile'} className='footer__navigation_link' >Профиль</Link>
    </div >
  )
}
