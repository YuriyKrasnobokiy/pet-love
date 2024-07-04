import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/users/";
export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registration = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post("/signup", userData);
      setToken(data.token);
      toast.success("Registration is successful 🥰");
      return data;
    } catch (e) {
      const errorMessage =
        e?.response?.data?.message || e.message || "An unknown error occurred";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);
