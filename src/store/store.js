import { legacy_createStore as createStore } from "redux";

const countReducer = (state = 0, action) => {
  if (action.type === "SUBTRACT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  if (action.type === "ADD") {
    return state + 1;
  }
  return state;
};

const store = createStore(
  countReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
