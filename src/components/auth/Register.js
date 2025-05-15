import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginSuccess } from '../slices/authSlice';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно';
        }

        if (!formData.email.includes('@')) {
            newErrors.email = 'Некорректный email';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Пароль должен быть не менее 6 символов';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Временная заглушка для демонстрации
            dispatch(loginSuccess({
                name: formData.name,
                email: formData.email,
            }));
            navigate('/profile');
        }
    };

    return (
        <div className="auth_container">
            <div className="authForm">
                <h2>Регистрация</h2>

                <form onSubmit={handleSubmit}>
                    <div className="authForm__formGroup">
                        <div>
                            <label htmlFor="name">Имя</label>
                            <input
                                className='authForm__formGroup_input'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            {errors.name && <span className="error_text">{errors.name}</span>}
                        </div>
                    </div>

                    <div className="authForm__formGroup">
                        <div>
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
                        <div>
                            {errors.email && <span className="error_text">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="authForm__formGroup">
                        <div>
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
                        <div>
                            {errors.password && <span className="error_text">{errors.password}</span>}
                        </div>
                    </div>

                    <div className="authForm__formGroup">
                        <div>
                            <label htmlFor="confirmPassword">Подтвердите пароль</label>
                            <input
                                className='authForm__formGroup_input'
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            {errors.confirmPassword && (
                                <span className="error_text">{errors.confirmPassword}</span>
                            )}
                        </div>
                    </div>

                    <button type="submit" className="auth__button">
                        Зарегистрироваться
                    </button>
                </form>

                <div className="auth_links">
                    <p>Уже есть аккаунт? <Link to={"/login"}><span className='auth_links_text'>Войти</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;