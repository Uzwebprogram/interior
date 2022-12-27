import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const Getcategories = createAsyncThunk("categories/get", async (id) => {
  return await axios.get(`${API_URL}/categories/${id}`).then((response) => response.data);
});
export const Getproducts = createAsyncThunk("products/get", async () => {
  return await axios.get(`${API_URL}/products`).then((response) => response.data);
});
export const GetproductsId = createAsyncThunk("productsId/get", async (id) => {
  return await axios.get(`${API_URL}/products/${id}`).then((response) => response.data);
});
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    getcategories: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    getproducts: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    getproductsid: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    }
  },
  extraReducers: {
    [Getcategories.pending]: (state, action) => {
      state.getcategories.loading = true;
    },
    [Getcategories.fulfilled]: (state, action) => {
      state.getcategories.Error = false;
      state.getcategories.Success = false;
      state.getcategories.Loading = false;
      state.getcategories.Data = action.payload;
    },
    [Getcategories.rejected]: (state, action) => {
      state.getcategories.Error = true;
      state.getcategories.Success = false;
      state.getcategories.Loading = false;
      state.getcategories.Data = [];
    },
    [Getproducts.pending]: (state, action) => {
      state.getproducts.loading = true;
    },
    [Getproducts.fulfilled]: (state, action) => {
      state.getproducts.Error = false;
      state.getproducts.Success = false;
      state.getproducts.Loading = false;
      state.getproducts.Data = action.payload;
    },
    [Getproducts.rejected]: (state, action) => {
      state.getproducts.Error = true;
      state.getproducts.Success = false;
      state.getproducts.Loading = false;
      state.getproducts.Data = [];
    },
    [GetproductsId.pending]: (state, action) => {
      state.getproductsid.loading = true;
    },
    [GetproductsId.fulfilled]: (state, action) => {
      state.getproductsid.Error = false;
      state.getproductsid.Success = false;
      state.getproductsid.Loading = false;
      state.getproductsid.Data = action.payload;
    },
    [GetproductsId.rejected]: (state, action) => {
      state.getproductsid.Error = true;
      state.getproductsid.Success = false;
      state.getproductsid.Loading = false;
      state.getproductsid.Data = [];
    },
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
