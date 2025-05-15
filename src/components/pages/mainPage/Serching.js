import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Serching = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <div className='top'>
            <div className='top__brand'>
                <h2 className='top__brand_name'>CookieShop</h2>
            </div>
            <form className='top__serch' onSubmit={handleSearch}>
                <img className='top__serch_icon' src='./serch.png' alt="Поиск" />
                <input 
                    className='top__serch_input' 
                    placeholder='Введите название товара'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
        </div>
    );
};