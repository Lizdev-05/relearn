import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    //    Actions

    ADD: (state) => {
      state.count += 1;
    },

    ADD_NUMBER: (state, action) => {
      state.count += action.payload;
    },

    SUBTRACT: (state) => {
      state.count -= 1;
    },

    RESET: (state) => {
      state.count = 0;
    },
  },
});

export const { ADD, ADD_NUMBER, SUBTRACT, RESET } = countSlice.actions;
export default countSlice.reducer;
