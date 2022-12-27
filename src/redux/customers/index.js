import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetCustomer = createAsyncThunk("Customer/get", async () => {
  return await axios.get(`${API_URL}/client`).then((response) => response.data);
});

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    getCustomer: {
      Error: false,
      Succsess: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetCustomer.pending]: (state, action) => {
      state.getCustomer.Loading = true;
    },
    [GetCustomer.fulfilled]: (state, action) => {
      state.getCustomer.Loading = false;
      state.getCustomer.Succsess = true;
      state.getCustomer.Error = false;
      state.getCustomer.Data = action.payload;
    },
    [GetCustomer.rejected]: (state, action) => {
      state.getCustomer.Error = true;
      state.getCustomer.Success = false;
      state.getCustomer.Loading = false;
      state.getCustomer.Data = [];
    },
  },
});

export const {} = CustomerSlice.actions;
export default CustomerSlice.reducer;
