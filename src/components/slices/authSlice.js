import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;