import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { isAuthenticated, user } = useSelector(state => state.auth);

    if (!isAuthenticated) {
        return (
            <div className="profile-unauthorized">
                <h2>Доступ к профилю</h2>
                <p>Чтобы просмотреть свой профиль, пожалуйста, войдите в систему или зарегистрируйтесь</p>
                <div className="auth-links">
                    <Link to="/login" className="auth-button">Войти</Link>
                    <Link to="/register" className="auth-button">Зарегистрироваться</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-authorized">
            <h2>Мой профиль</h2>
            <div className="profile-info">
                <p><strong>Имя:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <button className="logout-button">Выйти</button>
        </div>
    );
};

export default Profile;