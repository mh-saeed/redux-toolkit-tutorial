import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, modalReducer } from "./features";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
