import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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

export const addToFavorites = createAsyncThunk(
  "pets / addToFavorites",
  async ({ _id }) => {
    try {
      const response = await axios.post(
        `${API_URL}notices/favorites/add/${_id}`,
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Please log in to add to favorites");
      } else {
        toast.error("This pet has already been added to favorites");
      }
      throw error;
    }
  },
);

export const deleteFromFavorites = createAsyncThunk(
  "pets / deleteFromFavorites",
  async ({ _id }) => {
    try {
      const response = await axios.delete(
        `${API_URL}notices/favorites/remove/${_id}`,
      );
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Please log in to add to favorites");
      } else {
      toast.error("This pet has already been deleted");
      }
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
        state.profile.noticesFavorites = action.payload;
      })
      .addCase(deleteFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.profile.noticesFavorites = state.profile.noticesFavorites.filter(
          (pet) => action.payload.includes(pet._id),
        );
        // state.profile.noticesFavorites = action.payload;
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
