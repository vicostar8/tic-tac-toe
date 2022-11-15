import React from "react";

const GameOver = ({ players, isTie, newGame }) => {
  let toDisplay = "";
  if (isTie) {
    toDisplay = "It`s a TIE. Press New game to start a new one.";
  } else {
    for (let i = 0; i < players.length; i++) {
      if (players[i].isWinner) {
        toDisplay = `Player ${players[i].id} (${players[i].value}) won the game!`;
        break;
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Game Over</h1>
        <h3>{toDisplay}</h3>
        <button type="button" className="btn btn-success" onClick={newGame}>
          New Game
        </button>
      </div>
    </div>
  );
};

export default GameOver;
