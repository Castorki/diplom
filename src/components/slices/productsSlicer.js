import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/products';

const initialState = products;

const productsSlicer = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export default productsSlicer.reducer;