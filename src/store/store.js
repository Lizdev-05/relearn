import { legacy_createStore as createStore, combineReducers } from "redux";

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

  if (action.type === "ADD_NUMBER") {
    return state + action.payload;
  }
  return state;
};

const authReducer = (state = true, action) => {
  if (action.type === "LOGGED_IN") {
    return (state = !state);
  }
  return state;
};

const reducers = combineReducers({
  count: countReducer,
  isLoggedIn: authReducer,
});

const store = createStore(
  reducers,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
