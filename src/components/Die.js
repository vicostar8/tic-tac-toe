import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Die = ({ die, onDieRoll }) => {
  return (
    <div className="col-sm col-md-6 ">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <i
          className={`bi bi-${
            die.value === null ? "app" : `dice-${die.value}`
          }`}
          style={{ fontSize: "5rem" }}
        ></i>
        <button
          type="button"
          className="btn btn-primary my-1 fs-5"
          disabled={die.isRolled}
          onClick={() => onDieRoll(die.id)}
        >
          Roll die
        </button>
        <span className="badge bg-dark my-1 fs-6">Player {die.id}</span>
      </div>
    </div>
  );
};
export default Die;
