import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], itemCount: 0 },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          amount: state.cart[itemIndex].amount + 1,
        };
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }
      state.itemCount += 1;
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          amount: state.cart[itemIndex].amount + 1,
        };
        state.itemCount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (itemIndex !== -1 && state.cart[itemIndex].amount > 1) {
        state.cart[itemIndex] = {
          ...state.cart[itemIndex],
          amount: state.cart[itemIndex].amount - 1,
        };
        state.itemCount -= 1;
      } else if (itemIndex !== -1 && state.cart[itemIndex].amount === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.itemCount -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.itemCount -= action.payload.amount;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
