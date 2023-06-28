import { useSelector, useDispatch } from "react-redux";

const ReduxCounter = () => {
  const count = useSelector((state) => state);

  const dispatch = useDispatch(count);

  const addHandler = () => {
    dispatch({
      type: "ADD",
    });
  };

  const addHandlerNumber = (amount) => {
    dispatch({
      type: "ADD_NUMBER",
      payload: amount,
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
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <h1 className="--color-primary">Counter</h1>

        <h3>{count}</h3>

        <div className=" --flex-center">
          <button className=" --btn --btn-primary" onClick={addHandler}>
            Add
          </button>

          <button
            className=" --btn --btn-primary"
            onClick={addHandlerNumber(5)}
          >
            Add 5
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
