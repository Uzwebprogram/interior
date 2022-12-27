import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const GetVacancy = createAsyncThunk("Vacancy/get", async () => {
  return await axios.get(`${API_URL}/vakancy`).then((response) => response.data);
});

const VacancySlice = createSlice({
  name: "Vacancy",
  initialState: {
    getVacancy: {
      Error: false,
      Succsess: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetVacancy.pending]: (state, action) => {
      state.getVacancy.Loading = true;
    },
    [GetVacancy.fulfilled]: (state, action) => {
      state.getVacancy.Loading = false;
      state.getVacancy.Succsess = true;
      state.getVacancy.Error = false;
      state.getVacancy.Data = action.payload;
    },
    [GetVacancy.rejected]: (state, action) => {
      state.getVacancy.Error = true;
      state.getVacancy.Success = false;
      state.getVacancy.Loading = false;
      state.getVacancy.Data = [];
    },
  },
});

export const {} = VacancySlice.actions;
export default VacancySlice.reducer;
