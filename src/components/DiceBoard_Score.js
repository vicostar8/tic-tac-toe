import React from "react";
import DiceBoard_ScoreButtons from "./DiceBoard_ScoreButtons";

import { checkWinner } from "../utils/checkWinner";
import { displayWinner } from "./../utils/displayWinner";

const DiceBoard_Score = ({ dice, allDiceRolled, setWinner }) => {
  let winner = "-";
  if (allDiceRolled) winner = checkWinner(dice, allDiceRolled);

  let toDisplay = displayWinner(winner);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-4">
      <p className="mx-3 m-0 fs-3">Winner: {toDisplay}</p>
      {winner !== 0 && (
        <DiceBoard_ScoreButtons winner={winner} setWinner={setWinner} />
      )}
    </div>
  );
};

export default DiceBoard_Score;
