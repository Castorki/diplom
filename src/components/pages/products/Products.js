import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../slices/cartProductsSlicer';

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryType = queryParams.get('type');

    const [showNotification, setShowNotification] = useState(false);
    const [notificationProduct, setNotificationProduct] = useState('');

    const selectedProducts = categoryType
        ? products.filter((product) => product.type === categoryType)
        : products;

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));

        setNotificationProduct(product.title);
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    console.log(selectedProducts);
    console.log(selectedProducts.length);

    return (
        <>
            <h2 className='products__title'>Витрина товаров</h2>
            <div className='products'>
                {selectedProducts.length > 0 ? (
                    selectedProducts.map(product => (
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
                    )))
                    : (
                        <p>Витрина пуста</p>
                    )
                }
            </div>
            {showNotification && (
                <div className="notification">
                    {notificationProduct} добавлен в корзину!
                </div>
            )}
        </>
    );
};