export const counterReducer = (state, action) => {
  switch (action.type) {
    case "SUBTRACT":
      return { count: state.count - 1 };

    case "ADD":
      return { count: state.count + 1 };

    case "RESET":
      return { count: 0 };
  }
};
