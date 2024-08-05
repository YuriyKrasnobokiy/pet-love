import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  try {
    const response = await axios.get(`${API_URL}notices/`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching pets:", error);
    throw error;
  }
});

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default petsSlice.reducer;
