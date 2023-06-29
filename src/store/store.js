import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";
const store = configureStore({
  reducer: {
    count: counterSlice,
    auth: authSlice,
  },
});

export default store;
