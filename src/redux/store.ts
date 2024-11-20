import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import settingsReducer from "./slices/settingsSlice";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Export store for use throughout the app
export default store;
