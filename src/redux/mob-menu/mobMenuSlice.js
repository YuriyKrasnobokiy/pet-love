import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenMobMenu: false,
  // mobMenuData: null,
};

const mobMenuSlice = createSlice({
  name: "mobMenu",
  initialState,
  reducers: {
    openMobMenu: (state) => {
      // openMobMenu: (state, { payload }) => {
      state.isOpenMobMenu = true;
      // state.mobMenuData = payload;
    },
    closeMobMenu: (state) => {
      state.isOpenMobMenu = false;
      // state.mobMenuData = null;
    },
  },
});

export const { openMobMenu, closeMobMenu } = mobMenuSlice.actions;
export default mobMenuSlice.reducer;
