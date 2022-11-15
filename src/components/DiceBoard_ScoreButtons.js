import React from "react";

const DiceBoard_ScoreButtons = ({ winner, setWinner }) => {
  const buttons = ["X", "O"];

  return (
    <div className="d-flex- justify-content-center align-items-center">
      {buttons.map((btn) => (
        <button
          key={btn}
          type="button"
          className="btn btn-dark m-3 fs-3"
          onClick={() => setWinner(winner, btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default DiceBoard_ScoreButtons;
