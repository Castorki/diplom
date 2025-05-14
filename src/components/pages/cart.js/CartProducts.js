import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeProduct } from '../../slices/cartProductsSlicer';

export const CartProducts = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cartProducts);

    return (
        <div className='cart__products'>
            {cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <div key={product.id} className='cart__products_product'>
                        <h3 className='cart__products_product_title'>{product.title}</h3>
                        <img className='cart__products_product_img' src={product.img} alt={product.title} />
                        <p className='cart__products_product_price'>
                            Цена: {product.price} BYN
                        </p>
                        <div className="quantity__control">
                            <p className="quantity__control_title">Количество: </p>
                            <button
                                onClick={() => dispatch(decrementQuantity(product.id))}
                                className="quantity__control_button"
                                disabled={product.quantity <= 1} // Отключаем кнопку если количество = 1
                            >
                                −
                            </button>
                            <span className="quantity__control_value">{product.quantity}</span>
                            <button
                                onClick={() => dispatch(incrementQuantity(product.id))}
                                className="quantity__control_button"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => dispatch(removeProduct(product.id))}
                            className='cart__products_product_delete'
                        >
                            <img src='delete.svg' alt="Удалить" />
                        </button>
                    </div>
                ))
            ) : (
                <p className='cart__empty'>Корзина пуста</p>
            )}
        </div>
    );
};
