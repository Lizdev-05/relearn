const authReducer = (state = true, action) => {
  if (action.type === "LOGGED_IN") {
    return (state = !state);
  }
  return state;
};

export default authReducer;
