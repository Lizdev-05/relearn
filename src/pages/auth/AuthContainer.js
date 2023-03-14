import React, { useState } from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  //   const [login, setLogin] = useState(true);
  //   const [register, setRegister] = useState(false);
  //   const [reset, setReset] = useState(false);

  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const loginHandler = () => {
    // setLogin(true);
    // setReset(false);
    // setRegister(false);
    setAuth({ login: true, register: false, reset: false });
  };
  const registerHandler = () => {
    // setLogin(false);
    // setRegister(true);
    // setReset(false);
    setAuth({ login: false, register: true, reset: false });
  };

  const resetHandler = () => {
    // setLogin(false);
    // setReset(true);
    // setRegister(false);
    setAuth({ login: false, register: false, reset: true });
  };

  const [showPAssword, setShowPAssword] = useState(false);
  const handleToggleClick = () => {
    setShowPAssword(!showPAssword);
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {auth.login && (
          <Login onRegister={registerHandler} onReset={resetHandler} />
        )}
        {auth.register && (
          <Register
            onLogin={loginHandler}
            onShowPAssword={showPAssword}
            onHandleToggleClick={handleToggleClick}
          />
        )}
        {auth.reset && <Reset onLogin={loginHandler} />}
      </div>
    </section>
  );
};

export default AuthContainer;
