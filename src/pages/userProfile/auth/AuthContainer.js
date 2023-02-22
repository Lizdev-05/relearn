import React, { useState } from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);

  const registerHandler = () => {
    setLogin(false);
    setRegister(true);
  };
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {login && <Login onRegister={registerHandler} />}
        {register && <Register />}
        {reset && <Reset />}
      </div>
    </section>
  );
};

export default AuthContainer;
