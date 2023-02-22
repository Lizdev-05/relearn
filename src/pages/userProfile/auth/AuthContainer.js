import React, { useState } from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);

  const loginHandler = () => {
    setRegister(false);
    setLogin(true);
  };
  const registerHandler = () => {
    setLogin(false);
    setRegister(true);
  };

  const resetHandler = () => {
    setLogin(false);
    setReset(true);
  };
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {login && <Login onRegister={registerHandler} onReset={resetHandler} />}
        {register && <Register onLogin={loginHandler} />}
        {reset && <Reset ster={registerHandler} onReset={resetHandler} />}
        {register && <Register onLogin={loginHandler} />}
      </div>
    </section>
  );
};

export default AuthContainer;
