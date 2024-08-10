import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async ({ page, limit }) => {
    try {
      const response = await axios.get(
        `${API_URL}notices?page=${page}&limit=${limit}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching pets:", error);
      throw error;
    }
  },
);

const initialState = {
  pets: [],
  isLoading: false,
  error: null,
  filterTerm: "",
  page: 1,
  perPage: 6,
  totalPages: 0,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setFilterTerm(state, action) {
      state.filterTerm = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilterTerm, setPage } = petsSlice.actions;
export default petsSlice.reducer;
