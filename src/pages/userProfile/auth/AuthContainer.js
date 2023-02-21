import React from "react";
import Login from "./Login";
import "./AuthContainer.scss";
import Register from "./Register";
import Reset from "./Reset";

const AuthContainer = () => {
  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {/* <Login /> */}
        {/* <Register /> */}
        <Reset />
      </div>
    </section>
  );
};

export default AuthContainer;
