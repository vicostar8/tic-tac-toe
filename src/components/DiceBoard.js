import React from "react";
import Die from "./Die";
import DiceBoard_Reset from "./DiceBoard_Reset";
import DiceBoard_Score from "./DiceBoard_Score";

const DiceBoard = ({
  dice,
  allDiceRolled,
  onDieRoll,
  onResetDice,
  setWinner,
}) => {
  return (
    <div className="container DiceBoard_BG">
      <div className="row">
        {dice.map((die) => (
          <Die key={`die-${die.id}`} die={die} onDieRoll={onDieRoll} />
        ))}
      </div>
      <DiceBoard_Reset onResetDice={onResetDice} />
      <DiceBoard_Score
        dice={dice}
        allDiceRolled={allDiceRolled}
        setWinner={setWinner}
      />
    </div>
  );
};

export default DiceBoard;
