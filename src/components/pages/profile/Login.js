import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../slices/authSlice';



const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Временная заглушка для демонстрации
        if (formData.email === 'user@example.com' && formData.password === 'password123') {
            dispatch(loginSuccess({
                name: 'Иван Иванов',
                email: formData.email,
            }));
            navigate('/profile');
        } else {
            setError('Неверный email или пароль');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Вход в аккаунт</h2>
                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Войти
                    </button>
                </form>

                <div className="auth-links">
                    <p>Ещё нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
                    <p><a href="/forgot-password">Забыли пароль?</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;