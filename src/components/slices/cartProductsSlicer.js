import { createSlice } from '@reduxjs/toolkit';


const getInitialCart = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error('Ошибка при чтении из localStorage:', error);
        return [];
    }
};


const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Ошибка при сохранении в localStorage:', error);
    }
};

const initialState = getInitialCart();

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
            saveCartToLocalStorage(state);
        },
        incrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload);
            if (product) {
                product.quantity += 1;
            }
            saveCartToLocalStorage(state);
        },
        decrementQuantity: (state, action) => {
            const product = state.find(item => item.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
            saveCartToLocalStorage(state);
        },
        removeProduct: (state, action) => {
            const newState = state.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(newState);
            return newState;
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeProduct } = cartProductsSlicer.actions;
export default cartProductsSlicer.reducer;