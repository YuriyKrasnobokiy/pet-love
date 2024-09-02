import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  gender: "",
  specie: "",
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
  },
});

export const { setCategory, setGender, setSpecie } = filtersSlice.actions;
export default filtersSlice.reducer;
