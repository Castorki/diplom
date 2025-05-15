import React, { useState } from 'react';
import { useSelector } from 'react-redux';



export const AddressForm = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const [deliveryMethod, setDeliveryMethod] = useState('selfPickUp');
    const [city, setCity] = useState('');

    const cartItemsCount = useSelector(state =>
        state.cartProducts.reduce((total, item) => total + item.quantity, 0)
    );

    const citiesWithAddresses = {
        'Минск': ['ул. Ленина, 10', 'пр. Независимости, 25', 'ул. Козлова, 15'],
        'Гродно': ['ул. Советская, 5', 'ул. Ожешко, 20'],
        'Брест': ['ул. Гоголя, 8', 'ул. Московская, 30']
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (cartItemsCount > 0) {
            console.log('Форма отправлена');
        }
    };

    if (!isAuthenticated) {
        return (
            <div>
                <p>Для оформления заказа, пожалуйста, войдти в аккаунт или зарегистрируйтесь</p>
            </div>
        );
    }

    return (
        <div className="addressForm">
            <div className="delivery_method">
                <div>
                    <input
                        type="radio"
                        id="selfPickUp"
                        name="deliveryMethod"
                        value="selfPickUp"
                        checked={deliveryMethod === 'selfPickUp'}
                        onChange={() => setDeliveryMethod('selfPickUp')}
                    />
                    <label htmlFor="selfPickUp">Самовывоз</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="delivery"
                        name="deliveryMethod"
                        value="delivery"
                        checked={deliveryMethod === 'delivery'}
                        onChange={() => setDeliveryMethod('delivery')}
                    />
                    <label htmlFor="delivery">Доставка</label>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form_group">
                    <label htmlFor="name">Имя:</label>
                    <input
                        className='addressForm__input'
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                {deliveryMethod === 'selfPickUp' ? (
                    <>
                        <div className="form_group">
                            <label htmlFor="city">Выберите город:</label>
                            <select
                                className='addressForm__select'
                                id="city"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            >
                                <option value="">-- Выберите город --</option>
                                {Object.keys(citiesWithAddresses).map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form_group">
                            <label htmlFor="pickupAddress">Выберите адрес:</label>
                            <select
                                className='addressForm__select'
                                id="pickupAddress"
                                name="pickupAddress"
                                disabled={!city}
                                required
                            >
                                <option value="">-- Выберите адрес --</option>
                                {city && citiesWithAddresses[city].map(address => (
                                    <option key={address} value={address}>{address}</option>
                                ))}
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="form_group">
                            <label htmlFor="deliveryAddress">Адрес доставки:</label>
                            <input
                                className='addressForm__input'
                                type="text"
                                id="deliveryAddress"
                                name="deliveryAddress"
                                required
                            />
                        </div>

                        <div>
                            <label>Способ оплаты:</label>
                            <div className="payment_method">
                                <div>
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="paymentMethod"
                                        value="cash"
                                        defaultChecked
                                    />
                                    <label htmlFor="cash">Наличные</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="card"
                                        name="paymentMethod"
                                        value="card"
                                    />
                                    <label htmlFor="card">Картой</label>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    className="addressForm__button"
                    disabled={cartItemsCount === 0}
                >
                    Оформить заказ
                </button>
            </form>
        </div>
    );
};