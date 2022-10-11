import { configureStore } from "@reduxjs/toolkit";
import { characterApi } from "./characterApi";

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
  },
});
