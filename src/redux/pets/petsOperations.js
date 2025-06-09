import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchPets = createAsyncThunk(
  "pets/fetchPets",
  async ({
    page,
    limit,
    filterWord,
    category,
    species,
    isPopular,
    isExpensive,
    locationId,
  }) => {
    try {
      const response = await axios.get(
        `${API_URL}notices?page=${page}&limit=${limit}&keyword=${
          filterWord || ""
        }&category=${category || ""}&species=${species || ""}&byPopularity=${
          isPopular ? "true" : "false"
        }&locationId=${locationId || ""}&${
          category === "sell"
            ? `&byPrice=${isExpensive ? "true" : "false"}`
            : ""
        }`,
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

export const fetchCities = createAsyncThunk("pets/fetchCities", async () => {
  try {
    const response = await axios.get(`${API_URL}cities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching species:", error);
    throw error;
  }
});

// export const addToFavorites = createAsyncThunk(
//   "pets / addToFavorites",
//   async ({ _id }) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}notices/favorites/add/${_id}`,
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response?.status === 401) {
//         toast.error("Please log in to add to favorites");
//       } else {
//         toast.error("This pet has already been added to favorites");
//       }
//       throw error;
//     }
//   },
// );

// export const deleteFromFavorites = createAsyncThunk(
//   "pets / deleteFromFavorites",
//   async ({ _id }) => {
//     try {
//       const response = await axios.delete(
//         `${API_URL}notices/favorites/remove/${_id}`,
//       );
//       return response.data;
//     } catch (error) {
//       if (error.response?.status === 401) {
//         toast.error("Please log in to add to favorites");
//       } else {
//       toast.error("This pet has already been deleted");
//       }
//       throw error;
//     }
//   },
// );
