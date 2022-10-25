import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = state.items.find((item) => item.id === action.payload.id);

      if (!newItem) state.items = state.items.concat(action.payload);
      else
        state.items = state.items.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, qty: (item.qty += 1) };
          }

          return item;
        });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
