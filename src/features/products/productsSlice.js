import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/ApiService";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    status: "idle",
    error: null,
  },
  reducers: {
    searchItems: (state, action) => {
      state.filteredItems = state.items.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getItems.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const getItems = createAsyncThunk("products/getItems", async () => {
  const res = await getProducts();
  return res.data;
});

export const { searchItems } = productsSlice.actions;
export default productsSlice.reducer;
