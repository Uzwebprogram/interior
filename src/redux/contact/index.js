import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const PostContact = createAsyncThunk("contact/post", async (body) => {
  return await axios.post(`${API_URL}/contacts`, body).then((res) => res);
});

const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    postContact: {
      Error: false,
      Success: false,
      Loading: false,
    },
  },

  extraReducers: {
    [PostContact.pending]: (state, action) => {
      state.postContact.Loading = true;
    },
    [PostContact.fulfilled]: (state, action) => {
      state.postContact.Loading = false;
      state.postContact.Success = true;
      state.postContact.Error = false;
    },
    [PostContact.rejected]: (state, action) => {
      state.postContact.Error = true;
      state.postContact.Success = false;
      state.postContact.Loading = false;
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
