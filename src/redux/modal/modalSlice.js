import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  modalData: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpenModal = true;
      state.modalData = payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
