import { legacy_createStore as createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
  count: countReducer,
  isLoggedIn: authReducer,
});

const reduxStore = createStore(
  reducers,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default reduxStore;
