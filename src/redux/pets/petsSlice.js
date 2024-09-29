import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  fetchCategories,
  fetchCities,
  fetchGenders,
  fetchPets,
  fetchPetsById,
  fetchSpecies,
} from "./petsOperations";

const initialState = {
  categories: [],
  error: null,
  filterTerm: "",
  genders: [],
  isLoading: false,
  page: 1,
  perPage: 6,
  pet: {},
  pets: [],
  species: [],
  totalPages: 0,
  cities: [],
  favorites: [],
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
      .addCase(fetchPetsById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGenders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSpecies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPetsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pet = action.payload;
      })
      .addCase(fetchGenders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genders = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.species = action.payload;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = action.payload;
      })

      .addCase(fetchPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPetsById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGenders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSpecies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilterTerm, setPage } = petsSlice.actions;
export default petsSlice.reducer;
