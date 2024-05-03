import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async () => {
    try {
      const response = await axios.get(`${API_URL}friends/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching friends:", error);
      throw error;
    }
  },
);

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// export const { openModal, closeModal } = friendsSlice.actions;
export default friendsSlice.reducer;
