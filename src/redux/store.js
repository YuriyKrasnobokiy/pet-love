import { configureStore } from "@reduxjs/toolkit";
import mobMenuReducer from "./mob-menu/mobMenuSlice";
import modalReducer from "./modal/modalSlice";
import newsReducer from "./news/newsSlice";
import friendsReducer from "./our-friends/friendsSlice";
import petsReducer from "./pets/petsSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";

export const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    mobMenu: mobMenuReducer,
    friendsStore: friendsReducer,
    petsStore: petsReducer,
    newsStore: newsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
