import React from "react";

const DiceBoard_Reset = ({ onResetDice }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <p className="mx-3 m-0 fs-3">Reset</p>
      <button type="button" className="btn btn-dark fs-5" onClick={onResetDice}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
    </div>
  );
};

export default DiceBoard_Reset;
