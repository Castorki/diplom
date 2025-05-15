import React from 'react'
import { CartProducts } from './CartProducts';
import { MakeOrder } from './MakeOrder';
import { useSelector } from 'react-redux';
import { CartUnauthorized } from './CartUnauthorized';




export const Cart = () => {

    const { isAuthenticated } = useSelector(state => state.auth);

    if (!isAuthenticated) {
        return (
            <CartUnauthorized />
        );
    }

    return (
        <>
            <h2 className='cart__title'>Корзина</h2>
            <div className='cart'>
                <CartProducts />
                <MakeOrder />
            </div>
        </>
    )
}
