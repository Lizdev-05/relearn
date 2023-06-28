import { createStore } from "react-redux";

const countReducer = (state = 0, action) => {
  if (action.type === "SUBTRACTION") {
    state - 1;
  }
  if (action.type === "RESET") {
    state = 0;
  }
  if (action.type === "ADD") {
    state + 1;
  }
  return state;
};

const store = createStore(
  countReducer,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
