import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const PostCalculate = createAsyncThunk("calculate/post", async (body) => {
    return await axios.post(`${API_URL}/calculate`, body).then((res) => res); 
});

const CalculateSlice = createSlice({
  name: "calculate",
  initialState: {
    postCalculate: {
      Error: false,
      Success: false,
      Loading: false,
    },
  },
  extraReducers: {
    [PostCalculate.pending]: (state, action) => {
      state.postCalculate.Loading = true;
    },
    [PostCalculate.fulfilled]: (state, action) => {
      state.postCalculate.Error = false;
      state.postCalculate.Success = true;
      state.postCalculate.Loading = false;
    },
    [PostCalculate.rejected]: (state, action) => {
      state.postCalculate.Error = true;
      state.postCalculate.Success = false;
      state.postCalculate.Loading = false;
    },
  },
});

export const {} = CalculateSlice.actions
export default CalculateSlice.reducer