import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer,
  },
});

export default store;
