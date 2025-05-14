import { configureStore } from '@reduxjs/toolkit';
import categories from '../slices/categoriesSlicer';
import products from '../slices/productsSlicer';
import cartProducts from '../slices/cartProductsSlicer';
import authReducer from '../slices/authSlice';


export const store = configureStore({
    reducer: {
        categories: categories,
        products: products,
        cartProducts: cartProducts,
        auth: authReducer

    }
})