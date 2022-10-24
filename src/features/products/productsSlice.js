import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../services/ApiService";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getItems.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.items = action.payload;
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

export default productsSlice.reducer;
