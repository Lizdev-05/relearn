import { useSelector, useDispatch } from "react-redux";
import { ADD, ADD_NUMBER, SUBTRACT, RESET } from "../../store/counterSlice";
import { TOGGLE_AUTH } from "../../store/authSlice";

const SliceCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const auth = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button
          className=" --btn --btn-danger"
          onClick={() => dispatch(TOGGLE_AUTH())}
        >
          {auth ? "Log Out" : "Log In"}
        </button>
        {!auth ? (
          <p className="--m">Kindlly log in</p>
        ) : (
          <>
            <h1 className="--color-primary">Counter</h1>

            <h3>{count}</h3>

            <div className=" --flex-center">
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD())}
              >
                Add
              </button>

              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(ADD_NUMBER(5))}
              >
                Add 5
              </button>

              <button className=" --btn" onClick={() => dispatch(RESET())}>
                Reset
              </button>
              <button
                className=" --btn --btn-danger"
                onClick={() => dispatch(SUBTRACT())}
              >
                Subtract
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SliceCounter;
