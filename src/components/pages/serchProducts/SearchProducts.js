import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../slices/cartProductsSlicer';

export const SearchProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const urlQuery = queryParams.get('q') || '';


    const [searchQuery, setSearchQuery] = useState(urlQuery);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationProduct, setNotificationProduct] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setNotificationProduct(product.title);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    return (
        <>
            <div className='search'>
                <input
                    type='text'
                    className='search__input'
                    placeholder='Поиск по названию...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <h2 className='products__title'>
                {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Все товары'}
            </h2>

            <div className='products'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className='products__product'>
                            <h3 className='products__product_title'>{product.title}</h3>
                            <img className='products__product_img' src={product.img} alt={product.title} />
                            <p className='products__product_description'>
                                {product.description}
                            </p>
                            <p className='products__product_price'>
                                Цена: {product.price} BYN
                            </p>
                            <button
                                className='products__product_button'
                                onClick={() => handleAddToCart(product)}
                            >
                                <span>В корзину</span>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='no_results'>
                        {searchQuery
                            ? `Товары по запросу "${searchQuery}" не найдены`
                            : 'Введите поисковый запрос'}
                    </p>
                )}
            </div>

            {showNotification && (
                <div className="notification">
                    {notificationProduct} добавлен в корзину!
                </div>
            )}
        </>
    );
};