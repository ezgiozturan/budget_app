import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./incomeSlice";

export const store = configureStore({
  reducer: {
    incomes: incomeReducer,
  },
});

export default store;
