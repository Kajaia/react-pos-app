import { createSlice } from "@reduxjs/toolkit";
import toastAlert from "../../alerts/toastAlert";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = state.items.find((item) => item.id === action.payload.id);

      if (!newItem) {
        state.items = state.items.concat(action.payload);
        toastAlert("success", `Product added to cart!`, 2000);
      } else {
        toastAlert("warning", `Product is already in cart!`, 2000);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toastAlert("success", `Product removed from cart!`, 2000);
    },
    resetCart: (state) => {
      state.items = [];
      toastAlert("success", `Cart cleared!`, 2000);
    },
    incrementQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) return { ...item, qty: item.qty + 1 };

        return item;
      });
      toastAlert("success", `Increased product quantity!`, 2000);
    },
    decrementQty: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          toastAlert("success", `Decreased product quantity!`, 2000);
          return { ...item, qty: item.qty - 1 };
        }

        return item;
      });
    },
  },
});

export const { addItem, removeItem, resetCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
