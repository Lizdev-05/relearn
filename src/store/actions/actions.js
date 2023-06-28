export const addHandler = () => {
  dispatch({
    type: "ADD",
  });
};

export const addHandlerNumber = (amount) => {
  dispatch({
    type: "ADD_NUMBER",
    payload: amount,
  });
};
export const subtractHandler = () => {
  dispatch({
    type: "SUBTRACT",
  });
};
export const resetHandler = () => {
  dispatch({
    type: "RESET",
  });
};

export const authHandler = () => {
  dispatch({
    type: "LOGGED_IN",
  });
};
