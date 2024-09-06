import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  }) => {
    try {
      // console.log("isExpensive: ", isExpensive);
      // const response = await axios.get(
      //   `${API_URL}notices?page=${page}&limit=${limit}&keyword=${filterWord}&category=${category}&species=${species}`,
      // );

      // const response = await axios.get(
      //   `${API_URL}notices?page=${page}&limit=${limit}&keyword=${filterWord}&category=${
      //     category || ""
      //   }&species=${species || ""}&byPopularity=${
      //     isPopular ? "true" : "false"
      //   }&byPrice=${isExpensive ? "false" : "true"}`,
      // );
      const response = await axios.get(
        `${API_URL}notices?page=${page}&limit=${limit}&keyword=${filterWord}&category=${
          category || ""
        }&species=${species || ""}&byPopularity=${
          isPopular ? "true" : "false"
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
