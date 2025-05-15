import React from 'react';
import { useSelector } from 'react-redux';

export const Total = () => {
    const cartProducts = useSelector(state => state.cartProducts);

    const totalQuantity = cartProducts.reduce(
        (sum, product) => sum + product.quantity,
        0
    );


    const totalAmount = cartProducts.reduce(
        (sum, product) => sum + (product.price * product.quantity),
        0
    ).toFixed(2);

    return (
        <div className="order__total">
            <div className="order__total_item">
                <span style={{ marginRight: "12px" }}>Общее количество:</span>
                <span>{totalQuantity} шт.</span>
            </div>
            <div className="order__total_item">
                <span style={{ marginRight: "12px" }}>Сумма заказа:</span>
                <span>{totalAmount} BYN</span>
            </div>
        </div>
    );
};
