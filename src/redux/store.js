import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice";
import mobMenuReducer from "./mob-menu/mobMenuSlice";
import friendsReducer from "./our-friends/friendsSlice";
import newsReducer from "./news/newsSlice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const carsConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['favoriteCars', 'selectedCarIds'],
// };

export const store = configureStore({
  reducer: {
    // carsStore: persistReducer(carsConfig, carsReducer),
    modal: modalReducer,
    mobMenu: mobMenuReducer,
    friendsStore: friendsReducer,
    newsStore: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
