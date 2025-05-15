import { createSlice } from '@reduxjs/toolkit';
import { strenghts } from '../data/ourStrenghts';

const initialState = strenghts;

const strenghtsSlicer = createSlice({
    name: 'strenghts',
    initialState,
    reducers: {}
})

export default strenghtsSlicer.reducer;