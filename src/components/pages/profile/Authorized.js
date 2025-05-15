import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../slices/authSlice';


export const Authorized = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());

        navigate('/login');

    };


    return (
        <div className="profile__authorized">
            <h2 className='profile__authorized_title'>Мой профиль</h2>
            <div className="profile__info">
                <p className='profile__info_userName'><strong>Имя:</strong> {user.name}</p>
                <p className='profile__info_userEmail'><strong>Email:</strong> {user.email}</p>
            </div>
            <button onClick={handleLogout} className="profile__authorized_button">Выйти</button>
        </div>
    )
}
