import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const cartProductsSlicer = createSlice({
    name: 'cartProducts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        removeProduct: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const {addToCart, incrementQuantity, decrementQuantity, removeProduct} = cartProductsSlicer.actions;
export default cartProductsSlicer.reducer;