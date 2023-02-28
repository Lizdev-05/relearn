import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import registerImg from "../../assets/register.svg";
import "./AuthContainer.scss";

const Register = ({ onLogin }) => {
  const [showPAssword, setShowPAssword] = useState(false);

  const handleToggleClick = () => {
    setShowPAssword(!showPAssword);
  };
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={registerImg} alt="register" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          <div className="password">
            <input
              type={showPAssword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
            />
            <span className="icon" onClick={handleToggleClick}>
              {showPAssword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <button className="--btn --btn-primary --btn-block">Register</button>
          <span className="--text-sm --block">
            Have an account?{" "}
            <a href="#" className="--text-sm" onClick={onLogin}>
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
