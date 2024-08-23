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

export const fetchPetsById = createAsyncThunk(
  "pets/fetchPetsById",
  async ({ _id }) => {
    try {
      const response = await axios.get(`${API_URL}notices/${_id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching pet by id:", error);
      throw error;
    }
  },
);

export const fetchGenders = createAsyncThunk("pets/fetchGenders", async () => {
  try {
    const response = await axios.get(`${API_URL}notices/sex`);
    return response.data;
  } catch (error) {
    console.error("Error fetching genders:", error);
    throw error;
  }
});

export const fetchCategories = createAsyncThunk(
  "pets/fetchCategories",
  async () => {
    try {
      const response = await axios.get(`${API_URL}notices/categories`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
);

export const fetchSpecies = createAsyncThunk("pets/fetchSpecies", async () => {
  try {
    const response = await axios.get(`${API_URL}notices/species`);
    return response.data;
  } catch (error) {
    console.error("Error fetching species:", error);
    throw error;
  }
});

const initialState = {
  pet: {},
  pets: [],
  genders: [],
  species: [],
  categories: [],
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
      });
  },
});

export const { setFilterTerm, setPage } = petsSlice.actions;
export default petsSlice.reducer;
