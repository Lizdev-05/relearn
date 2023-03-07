import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import registerImg from "../../assets/register.svg";
import "./AuthContainer.scss";
import { GoPrimitiveDot } from "react-icons/go";

const Register = ({ onLogin }) => {
  const [showPAssword, setShowPAssword] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const handleToggleClick = () => {
    setShowPAssword(!showPAssword);
  };

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePasslick = (e) => {
    setPass(e.target.value);
    console.log(pass);
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
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasslick}
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
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password strength indicator</p>
              <span className="--align-center">
                <li>
                  <GoPrimitiveDot />
                  &nbsp; Lowercase & Uppercase
                </li>
              </span>
              <span className="--align-center">
                <li>
                  <GoPrimitiveDot />
                  &nbsp; Numbers (0-9)
                </li>
              </span>
              <span className="--align-center">
                <li>
                  <GoPrimitiveDot />
                  &nbsp; Special Character ( !@#$%^&*)
                </li>
              </span>
              <span className="--align-center">
                <li>
                  <GoPrimitiveDot />
                  &nbsp; At least 8 Character
                </li>
              </span>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
