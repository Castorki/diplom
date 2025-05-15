import { createSlice } from '@reduxjs/toolkit';
import { userData } from '../data/usersData';

const initialState = userData;

const userDataSlicer = createSlice({
    name: 'uaerData',
    initialState,
    reducers: {}
})

export default userDataSlicer.reducer;