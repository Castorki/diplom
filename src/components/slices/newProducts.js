import { createSlice } from '@reduxjs/toolkit';
import { newsProduct } from '../data/news';

const initialState = newsProduct;

const newProductsSlicer = createSlice({
    name: 'news',
    initialState,
    reducers: {}
})

export default newProductsSlicer.reducer;