export const addHandler = () => {
  return {
    type: "ADD",
  };
};

export const addHandlerNumber = (amount) => {
  return {
    type: "ADD_NUMBER",
    payload: amount,
  };
};
export const subtractHandler = () => {
  return {
    type: "SUBTRACT",
  };
};
export const resetHandler = () => {
  return {
    type: "RESET",
  };
};

export const authHandler = () => {
  return {
    type: "LOGGED_IN",
  };
};
