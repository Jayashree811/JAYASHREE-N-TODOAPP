import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import todoReducer from "./todoslice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    todo: todoReducer
  },
});
