import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetYoutube = createAsyncThunk("youtube/get", async () => {
  return await axios
    .get(`${API_URL}/youtube`)
    .then((response) => response.data);
});

const YoutubeSlice = createSlice({
  name: "Vacancy",
  initialState: {
    getYoutube: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetYoutube.pending]: (state, action) => {
      state.getYoutube.loading = true;
    },
    [GetYoutube.fulfilled]: (state, action) => {
      state.getYoutube.Error = false;
      state.getYoutube.Success = true;
      state.getYoutube.Loading = false;
      state.getYoutube.Data = action.payload;
    },
    [GetYoutube.rejected]: (state, action) => {
      state.getYoutube.Error = true;
      state.getYoutube.Success = false;
      state.getYoutube.Loading = false;
      state.getYoutube.Data = [];
    },
  },
});

export const {} = YoutubeSlice.actions;
export default YoutubeSlice.reducer;
