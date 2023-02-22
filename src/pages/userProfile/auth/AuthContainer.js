import React, { useState } from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {login && <Login />}
        {register && <Register />}

        <Reset />
      </div>
    </section>
  );
};

export default AuthContainer;
