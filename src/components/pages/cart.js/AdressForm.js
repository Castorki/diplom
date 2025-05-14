import React, { useState } from 'react';

export const AddressForm = () => {
    const [deliveryMethod, setDeliveryMethod] = useState('selfPickUp');
    const [city, setCity] = useState('');

    const citiesWithAddresses = {
        'Минск': ['ул. Ленина, 10', 'пр. Независимости, 25', 'ул. Козлова, 15'],
        'Гродно': ['ул. Советская, 5', 'ул. Ожешко, 20'],
        'Брест': ['ул. Гоголя, 8', 'ул. Московская, 30']
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма отправлена');
    };

    return (
        <div className="address__form">
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
                                type="text"
                                id="deliveryAddress"
                                name="deliveryAddress"
                                required
                            />
                        </div>

                        <div className="form_group">
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

                <button type="submit" className="submit_button">
                    Оформить заказ
                </button>
            </form>
        </div>
    );
};