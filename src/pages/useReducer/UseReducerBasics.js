import React, { useReducer, useState } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "SUBTRACT":
      return { count: state.count - 1 };

    case "ADD":
      return { count: state.count + 1 };

    case "RESET":
      return { count: 0 };
  }
};

const initialState = {
  count: 0,
};
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const addHandler = () => {
    dispatch({
      type: "ADD",
    });
  };
  const subtractHandler = () => {
    dispatch({
      type: "SUBTRACT",
    });
  };
  const resetHandler = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h1>Counter</h1>

        <span>{state.count}</span>

        <div className="buttons --flex-center">
          <button className=" --btn --btn-primary" onClick={addHandler}>
            Add
          </button>

          <button className=" --btn" onClick={resetHandler}>
            Reset
          </button>
          <button className=" --btn --btn-danger" onClick={subtractHandler}>
            Subtract
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
