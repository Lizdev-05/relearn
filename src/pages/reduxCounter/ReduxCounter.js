import { useSelector, useDispatch } from "react-redux";

const ReduxCounter = () => {
  const count = useSelector((state) => state);

  const dispatch = useDispatch(count);

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

        <span>{count}</span>

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

export default ReduxCounter;
