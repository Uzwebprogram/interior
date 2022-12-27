import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const Gettrusted = createAsyncThunk("trusted/get", async () => {
  return await axios
    .get(`${API_URL}/partners`)
    .then((response) => response.data);
});

const TrustedSlice = createSlice({
  name: "trusted",
  initialState: {
    gettrusted: {
      Error: false,
      Succsess: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [Gettrusted.pending]: (state, action) => {
      state.gettrusted.Loading = true;
    },
    [Gettrusted.fulfilled]: (state, action) => {
      state.gettrusted.Loading = false;
      state.gettrusted.Succsess = true;
      state.gettrusted.Error = false;
      state.gettrusted.Data = action.payload;
    },
    [Gettrusted.rejected]: (state, action) => {
      state.gettrusted.Error = true;
      state.gettrusted.Success = false;
      state.gettrusted.Loading = false;
      state.gettrusted.Data = [];
    },
  },
});

export const {} = TrustedSlice.actions;
export default TrustedSlice.reducer;
