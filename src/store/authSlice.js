import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },

  reducers: {
    // ACTION

    TOGGLE_AUTH: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { TOGGLE_AUTH } = authSlice.actions;
export default authSlice.reducer;
