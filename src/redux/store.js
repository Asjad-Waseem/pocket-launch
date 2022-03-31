import { configureStore } from "@reduxjs/toolkit";
import rocketSlice from "./slices/rocketSlice";
export const store = configureStore({
 reducer: {
  id: rocketSlice,
 },
});