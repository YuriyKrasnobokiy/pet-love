import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  gender: "",
  specie: "",
  expensive: null,
  popular: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSpecie(state, action) {
      state.specie = action.payload;
    },
    setPopular(state, action) {
      state.popular = action.payload;
    },
    setExpensive(state, action) {
      state.expensive = action.payload;
    },
  },
});

export const { setCategory, setSpecie, setGender, setPopular, setExpensive } =
  filtersSlice.actions;
export default filtersSlice.reducer;
