import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToFavorites, deleteFromFavorites } from "../pets/petsOperations";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    try {
      const response = await axios.get(`${API_URL}users/current/full`);
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    }
  },
);

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (profileData) => {
    try {
      const response = await axios.patch(
        `${API_URL}users/current/edit`,
        profileData,
      );
      return response.data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  },
);

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFromFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(addToFavorites.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.profile.favorites = action.payload;
      // })
      // .addCase(deleteFromFavorites.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.profile.favorites = action.payload;
      // })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.favorites = action.payload;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
