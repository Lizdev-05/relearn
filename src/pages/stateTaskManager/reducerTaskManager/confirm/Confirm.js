import React from "react";
import "./Confirm.css";

const Confirm = ({
  modalActionText,
  modalMsg,
  modalTitle,
  modalAction,
  onCloseModal,
}) => {
  return (
    <div className="confirm">
      <div className="confirm-modal">
        <div className="confirm-header">
          <span className="title">{modalTitle}</span>
          <button className="close-header" onClick={onCloseModal}>
            &times;
          </button>
        </div>
        <div className="confirm-content">
          <p>{modalMsg}</p>
        </div>
        <div className="buttons">
          <button className="btn btn-ok" onClick={modalAction}>
            {modalActionText}
          </button>
          <button className="btn btn-cancel" onClick={onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
