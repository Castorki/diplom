import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginSuccess } from '../slices/authSlice';




const Login = () => {
    const userData = useSelector(state => state.userData)
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
        if (formData.email === userData.email && formData.password === userData.password) {
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
        <div className="auth_container">
            <div className="authForm">
                <h2>Вход в аккаунт</h2>
                {error && <div className="error_message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="authForm__formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            className='authForm__formGroup_input'
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="authForm__formGroup">
                        <label htmlFor="password">Пароль</label>
                        <input
                            className='authForm__formGroup_input'
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="auth__button">
                        Войти
                    </button>
                </form>

                <div className="auth_links">
                    <p className='auth_links_descr'>Ещё нет аккаунта? <Link to={"/register"}><span className='auth_links_text'>Зарегистрироваться</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;