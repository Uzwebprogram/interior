import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetProject = createAsyncThunk("lastProjects/get", async () => {
  return await axios
    .get(`${API_URL}/projects`)
    .then((response) => response.data);
});

const LastProjectSlice = createSlice({
  name: "project",
  initialState: {
    getProject: {
      Error: false,
      Succsess: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetProject.pending]: (state, action) => {
      state.getProject.Loading = true;
    },
    [GetProject.fulfilled]: (state, action) => {
      state.getProject.Loading = false;
      state.getProject.Succsess = true;
      state.getProject.Error = false;
      state.getProject.Data = action.payload;
    },
    [GetProject.rejected]: (state, action) => {
      state.getProject.Error = true;
      state.getProject.Success = false;
      state.getProject.Loading = false;
      state.getProject.Data = [];
    },
  },
});

export const {} = LastProjectSlice.actions;
export default LastProjectSlice.reducer;
