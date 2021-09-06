import { configureStore } from "@reduxjs/toolkit";
import tutorialReducer from "../slices/tutorialSlice";

export const store = configureStore({
  reducer: {
    tutorial: tutorialReducer,
  },
});
