import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    //
  },
});

export const getItems = createAsyncThunk("products/getItems", async () => {
  //
});

export default productsSlice.reducer;
