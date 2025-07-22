import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/apiConfig";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page, limit, filterWord }) => {
    try {
      const response = await axios.get(
        `${API_URL}news?page=${page}&limit=${limit}&keyword=${filterWord}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  },
);

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  filterTerm: "",
  page: 1,
  perPage: 6,
  totalPages: 0,
};

const newsSlice = createSlice({
  name: "news",
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
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilterTerm, setPage } = newsSlice.actions;
export default newsSlice.reducer;
