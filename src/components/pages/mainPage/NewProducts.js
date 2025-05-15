import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartProductsSlicer';

export const NewsProduct = () => {
    const dispatch = useDispatch();
    const newProducts = useSelector(state => state.newProducts);

    const [showNotification, setShowNotification] = useState(false);
    const [notificationProduct, setNotificationProduct] = useState('');

    const handleAddToCart = (news) => {
        dispatch(addToCart(news));

        setNotificationProduct(news.title);
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className='popular'>
            <h2 className='popular__name'>Новинки</h2>
            <div className='popular__categories'>
                {newProducts.map(news => (
                    <div key={news.id} className='popular__categories_category'>
                        <img className='popular__categories_img' src={news.img} alt={news.title}></img>
                        <div className='popular__categories_info'>
                            <h2 className='popular__categories_info_name'>{news.title}</h2>
                            <p className='popular__categories_info_description'>{news.description}</p>
                        </div>
                        <button onClick={() => handleAddToCart(news)} type='button' className='popular__categories_category_button'><span className='popular__categories_category_button_text'>Добавить в корзину</span></button>
                    </div>
                ))}

            </div>
            {showNotification && (
                <div className="notification">
                    {notificationProduct} добавлен в корзину!
                </div>
            )}
        </div>
    )
}
