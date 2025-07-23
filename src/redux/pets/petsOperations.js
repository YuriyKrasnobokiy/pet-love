import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/apiConfig";

// export const fetchPets = createAsyncThunk(
//   "pets/fetchPets",
//   async ({
//     page,
//     limit,
//     filterWord,
//     category,
//     species,
//     isPopular,
//     isExpensive,
//     locationId,
//   }) => {
//     try {
//       const response = await axios.get(
//         `${API_URL}notices?page=${page}&limit=${limit}&keyword=${
//           filterWord || ""
//         }&category=${category || ""}&species=${species || ""}&byPopularity=${
//           isPopular ? "true" : "false"
//         }&locationId=${locationId || ""}&byPrice=${isExpensive ? "true" : "false"}`

//       );

//       return response.data;
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//       throw error;
//     }
//   },
// );

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
      const params = {
        page,
        limit,
      };

      if (filterWord) params.keyword = filterWord;
      if (category) params.category = category;
      if (species) params.species = species;
      if (locationId) params.locationId = locationId;

      if (isPopular === true || isPopular === false) {
        params.byPopularity = isPopular.toString();
      }

      if (isExpensive === true || isExpensive === false) {
        params.byPrice = isExpensive.toString();
      }

      const response = await axios.get(`${API_URL}notices`, { params });

      return response.data;
    } catch (error) {
      console.error("Error fetching pets:", error);
      throw error;
    }
  }
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
