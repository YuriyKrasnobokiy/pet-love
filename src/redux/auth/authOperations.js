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

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post("/signin", userData);
      setToken(data.token);
      toast.success("Welcome back 🥰");
      return data;
    } catch (e) {
      const errorMessage =
        e?.response?.data?.message || e.message || "An unknown error occurred";
      toast.error(errorMessage);
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/signout");
    unsetToken();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    const { data } = await axios.get("/current/full");
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
