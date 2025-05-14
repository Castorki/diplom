import React from 'react'
import { CartProducts } from './CartProducts';
import { MakeOrder } from './MakeOrder';



export const Cart = () => {

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
