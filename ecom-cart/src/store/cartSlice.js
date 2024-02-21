import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "apple", price: 110 },
    { name: "orange", price: 342 },
    { name: "mango", price: 242 },
    { name: "greps", price: 211 },
  ],
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
