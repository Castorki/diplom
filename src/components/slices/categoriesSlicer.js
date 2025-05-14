import { createSlice } from '@reduxjs/toolkit';
import { categories } from '../data/categorieas';

const initialState = categories;

const categoriesSlicer = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlicer.reducer;