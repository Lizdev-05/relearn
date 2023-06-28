import { useSelector, useDispatch } from "react-redux";
import {
  addHandler,
  addHandlerNumber,
  subtractHandler,
  resetHandler,
  authHandler,
} from "../../store/actions/actions";

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const auth = useSelector((state) => state.isLoggedIn);

  const dispatch = useDispatch();

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button
          className=" --btn --btn-danger"
          onClick={() => dispatch(authHandler())}
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
                onClick={() => dispatch(addHandler())}
              >
                Add
              </button>

              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(addHandlerNumber(5))}
              >
                Add 5
              </button>

              <button
                className=" --btn"
                onClick={() => dispatch(resetHandler())}
              >
                Reset
              </button>
              <button
                className=" --btn --btn-danger"
                onClick={() => dispatch(subtractHandler())}
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

export default ReduxCounter;
