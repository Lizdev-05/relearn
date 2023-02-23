import React from "react";
import loginImg from "../../assets/login.svg";
import "./AuthContainer.scss";

const Login = ({ onRegister, onReset }) => {
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={loginImg} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <div className="password">
            <input className="--width-100" placeholder="Password" />
          </div>
          <button className="--btn --btn-primary --btn-block">Login</button>
          <a href="#" className="--text-sm" onClick={onReset}>
            Forgot password
          </a>
          <span className="--text-sm --block">
            Don't have an account?{" "}
            <a href="#" className="--text-sm" onClick={onRegister}>
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
