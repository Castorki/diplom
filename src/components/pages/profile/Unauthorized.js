import React from 'react';
import { Link } from 'react-router-dom';


export const Unauthorized = () => {
  return (
    <div className="profile__unauthorized">
                <h2 className='profile__unauthorized_title'>Доступ к профилю</h2>
                <p className='profile__unauthorized_descr'>Чтобы просмотреть свой профиль, пожалуйста, войдите в систему или зарегистрируйтесь</p>
                <div className="auth_links">
                    <Link to="/login" className="auth__button"><span className='auth__button_text'>Войти</span></Link>
                    <Link to="/register" className="auth__button"><span className='auth__button_text'>Зарегистрироваться</span></Link>
                </div>
            </div>
  )
}
