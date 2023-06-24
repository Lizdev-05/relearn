import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import registerImg from "../../assets/register.svg";
import "./AuthContainer.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const Register = ({ onLogin, onShowPAssword, onHandleToggleClick }) => {
  // const [showPAssword, setShowPAssword] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetters, setPassLetters] = useState(false);
  const [passNumbers, setPassNumbers] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const [passComplete, setPassComplete] = useState(false);

  useEffect(() => {
    //Letters Checker
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetters(true);
    } else setPassLetters(false);

    //Number Checker
    if (pass.match(/([0-9])/)) {
      setPassNumbers(true);
    } else setPassNumbers(false);

    //Char Checker
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else setPassChar(false);

    //Length Checker
    if (pass.length > 7) {
      setPassLength(true);
    } else setPassLength(false);

    // Password Complete
    if (passLetters && passNumbers && passChar && passLength) {
      setPassComplete(true);
    } else setPassComplete(false);
  }, [pass, passLetters, passNumbers, passChar, passLength]);

  // const handleToggleClick = () => {
  //   setShowPAssword(!showPAssword);
  // };

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePassClick = (e) => {
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
              type={onShowPAssword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePassClick}
            />
            <span className="icon" onClick={onHandleToggleClick}>
              {onShowPAssword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <button
            disabled={!passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
          >
            Register
          </button>
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
                <li className={passLetters ? "pass-green" : "pass-red"}>
                  {passLetters ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </li>
              </span>
              <span className="--align-center">
                <li className={passNumbers ? "pass-green" : "pass-red"}>
                  {passNumbers ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers (0-9)
                </li>
              </span>
              <span className="--align-center">
                <li className={passChar ? "pass-green" : "pass-red"}>
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special Character ( !@#$%^&*)
                </li>
              </span>
              <span className="--align-center">
                <li className={passLength ? "pass-green" : "pass-red"}>
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
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
