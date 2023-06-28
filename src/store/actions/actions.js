import { ACTIONS } from "./actionTypes";

export const addHandler = () => {
  return {
    type: ACTIONS.ADD,
  };
};

export const addHandlerNumber = (amount) => {
  return {
    type: ACTIONS.ADD_NUMBER,
    payload: amount,
  };
};
export const subtractHandler = () => {
  return {
    type: ACTIONS.SUBTRACT,
  };
};
export const resetHandler = () => {
  return {
    type: ACTIONS.RESET,
  };
};

export const authHandler = () => {
  return {
    type: ACTIONS.TOGGLE_AUTH,
  };
};
