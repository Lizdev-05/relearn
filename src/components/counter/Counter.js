import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount(count + 1);
  };
  const subtractHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };

  let color = "#444";
  if (count >= 1) {
    color = "blue";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#444";
  }

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h1>Counter</h1>

        <span style={{ color: color }}>{count}</span>

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
