import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetTeam = createAsyncThunk("Team/get", async () => {
  return await axios.get(`${API_URL}/teams`).then((response) => response.data);
});

const TeamSlice = createSlice({
  name: "Team",
  initialState: {
    getTeam: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetTeam.pending]: (state, action) => {
      state.getTeam.loading = true;
    },
    [GetTeam.fulfilled]: (state, action) => {
      state.getTeam.Error = false;
      state.getTeam.Success = true;
      state.getTeam.Loading = false;
      state.getTeam.Data = action.payload;
    },
    [GetTeam.rejected]: (state, action) => {
      state.getTeam.Error = true;
      state.getTeam.Success = false;
      state.getTeam.Loading = false;
      state.getTeam.Data = [];
    },
  },
});

export const {} = TeamSlice.actions;
export default TeamSlice.reducer;
