import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  isApproveModalOpen: false,
  modalData: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpenModal = true;
      state.modalData = action.payload;
    },
    openApproveModal: (state) => {
      state.isOpenModal = true;
      state.isApproveModalOpen = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
      state.isApproveModalOpen = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal, openApproveModal } = modalSlice.actions;
export default modalSlice.reducer;
