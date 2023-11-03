import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload, ...state.cart];
    },
    deleteFromCart: (state, action) => {
      const updatedArray = state.cart.filter(
        (task) => task.id !== action.payload
      );
      state.cart = updatedArray;
    },
    updateCart: (state, action) => {
      const updatedArray = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            qty: action.payload.qty,
          };
        } else {
          return item;
        }
      });
      state.cart = updatedArray;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, deleteFromCart, updateCart, emptyCart } =
  CartSlice.actions;

export default CartSlice.reducer;
