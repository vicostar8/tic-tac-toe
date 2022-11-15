import React from "react";
import TableGame from "./TableGame";

import { checkQueue } from "./../utils/checkQueue";

const TicTacToe = ({ players, tableGame, handleBox }) => {
  const queue = checkQueue(players);

  return (
    <div className="">
      <div className="">
        <h2>Current: {queue.currentPlayer.text}</h2>
        <h2 className="ms-auto">Next: {queue.nextPlayer.text}</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <TableGame
          tableGame={tableGame}
          handleBox={handleBox}
          currentPlayer={queue.currentPlayer.current}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
