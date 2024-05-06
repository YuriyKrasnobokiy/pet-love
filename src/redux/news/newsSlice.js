import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = "https://petlove.b.goit.study/api/";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  try {
    const response = await axios.get(`${API_URL}news?page=1&limit=6`);
    // return response.data;
    return response.data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
});

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  filterTerm: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setFilterTerm(state, action) {
      state.filterTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { setFilterTerm } = newsSlice.actions;
export default newsSlice.reducer;
