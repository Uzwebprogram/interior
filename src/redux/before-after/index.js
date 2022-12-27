import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetSingle = createAsyncThunk("Single/get", async () => {
  return await axios.get(`${API_URL}/single`).then((response) => response.data);
});

const SingleSlice = createSlice({
  name: "Projects",
  initialState: {
    getSingle: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetSingle.pending]: (state, action) => {
      state.getSingle.Loading = true;
    },
    [GetSingle.fulfilled]: (state, action) => {
      state.getSingle.Loading = false;
      state.getSingle.Succsess = true;
      state.getSingle.Error = false;
      state.getSingle.Data = action.payload;
    },
    [GetSingle.rejected]: (state, action) => {
      state.getSingle.Error = true;
      state.getSingle.Success = false;
      state.getSingle.Loading = false;
      state.getSingle.Data = [];
    },
  },
});

export const {} = SingleSlice.actions;
export default SingleSlice.reducer;
