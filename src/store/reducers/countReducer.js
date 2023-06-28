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

export default countReducer;
