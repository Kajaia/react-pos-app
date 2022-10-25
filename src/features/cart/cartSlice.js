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
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
