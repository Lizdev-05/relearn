import React, { useEffect } from "react";
import "./Aler.css";
import { FaExclamationCircle, FaTimes } from "react-icons/fa";

const Alert = ({ alertContent, alertClass, onCloseAlert }) => {
  useEffect(() => {
    const int = setTimeout(() => {
      onCloseAlert();
    }, 3000);

    return () => {
      clearTimeout(int);
    };
  });

  return (
    <div className={`alert ${alertClass}`} onClick={onCloseAlert}>
      <FaExclamationCircle size={16} className="icon-x" />
      <span className="msg"> {alertContent}</span>
      <div className="close-btn">
        <FaTimes size={19} className="icon-x" />
      </div>
    </div>
  );
};

export default Alert;
