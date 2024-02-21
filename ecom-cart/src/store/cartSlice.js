import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "apple", price: 110 },
    { name: "orange", price: 342 },
    { name: "mango", price: 242 },
    { name: "grapes", price: 211 }, // Corrected the spelling of "grapes"
  ],
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    removeFromCart: (state, action) => {
      const { index, price } = action.payload;
      state.cart.splice(index, 1);
      state.total = state.total - price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
