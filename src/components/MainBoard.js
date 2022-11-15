import React, { Component } from "react";
import DiceBoard from "./DiceBoard";
import TicTacToe from "./TicTacToe";
import GameOver from "./GameOver";

import "bootstrap/dist/css/bootstrap.css";
import "../css/General.css";

import { generateRandomNumber } from "../utils/generateRandomNumber";
import { checkAllDiceRolled } from "../utils/checkAllDiceRolled";
import { generateTableGame } from "../utils/generateTableGame";
import { isGameOver } from "./../utils/isGameOver";
import { getGameWinner } from "./../utils/getGameWinner";

class MainBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [
        { id: 1, value: null, isRolled: false },
        { id: 2, value: null, isRolled: false },
      ],
      allDiceRolled: false,
      players: [
        {
          id: 1,
          value: null,
          isWinner: false,
          isCurrentPlayer: false,
          //   bgColor: "#dc785a",
          bgColor: "#f35a2b",
        },
        {
          id: 2,
          value: null,
          isWinner: false,
          isCurrentPlayer: false,
          bgColor: "#4fec7e",
        },
      ],
      isGameReady: false,
      tableGame: generateTableGame(),
      movesLeft: 9,
      isGameOver: false,
      isTie: false,
    };

    this.onDieRoll = this.onDieRoll.bind(this);
    this.onResetDice = this.onResetDice.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.handleBox = this.handleBox.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  onDieRoll(dieID) {
    const diceClone = this.state.dice;

    diceClone.map((die) => {
      if (die.id === dieID) {
        die.value = generateRandomNumber();
        die.isRolled = true;
      } else return die;
    });

    // check if all dice rolled
    const allDiceRolled = checkAllDiceRolled(diceClone);

    this.setState({ dice: diceClone, allDiceRolled });
  }

  onResetDice() {
    const dice = this.state.dice;
    const players = this.state.players;

    dice.map((die) => ((die.value = null), (die.isRolled = false)));
    players.map((player) => ((player.value = null), (player.isWinner = false)));

    this.setState({ dice, allDiceRolled: false, players, isGameReady: false });
  }

  setWinner(winner, valueChoosed) {
    const playersClone = this.state.players;
    playersClone.map((player) => {
      if (player.id === winner) {
        player.value = valueChoosed;
        player.isCurrentPlayer = true;
      } else {
        if (valueChoosed === "X") player.value = "O";
        else player.value = "X";
      }
    });

    this.setState({ players: playersClone, isGameReady: true });
  }

  handleBox(col, currentPlayer) {
    const tableGameClone = this.state.tableGame;
    const playersClone = this.state.players;

    for (let i = 0; i < tableGameClone.length; i++) {
      for (let j = 0; j < tableGameClone.length; j++) {
        if (tableGameClone[i][j].id === col) {
          if (tableGameClone[i][j].value === null) {
            tableGameClone[i][j].value = currentPlayer.value;
            tableGameClone[i][j].bgColor = currentPlayer.bgColor;
            for (let k = 0; k < playersClone.length; k++) {
              playersClone[k].isCurrentPlayer =
                !playersClone[k].isCurrentPlayer;
            }
          } else {
            alert(`Choose another cell!`);
          }
        }
      }
    }

    this.setState(
      {
        tableGame: tableGameClone,
        players: playersClone,
        movesLeft: this.state.movesLeft - 1,
      },
      () => {
        if (this.state.movesLeft < 5) {
          const isGO = isGameOver(this.state.tableGame);
          if (isGO.bool) {
            const playersClone = getGameWinner(this.state.players, isGO.value);
            this.setState({ isGameOver: isGO.bool, players: playersClone });
          } else {
            if (this.state.movesLeft === 0) {
              this.setState({ isGameOver: true, isTie: true });
            }
          }
        }
      }
    );
  }

  newGame() {
    this.setState({
      dice: [
        { id: 1, value: null, isRolled: false },
        { id: 2, value: null, isRolled: false },
      ],
      allDiceRolled: false,
      players: [
        {
          id: 1,
          value: null,
          isWinner: false,
          isCurrentPlayer: false,
          //   bgColor: "#dc785a",
          bgColor: "#f35a2b",
        },
        {
          id: 2,
          value: null,
          isWinner: false,
          isCurrentPlayer: false,
          bgColor: "#4fec7e",
        },
      ],
      isGameReady: false,
      tableGame: generateTableGame(),
      movesLeft: 9,
      isGameOver: false,
      isTie: false,
    });
  }

  render() {
    const {
      dice,
      players,
      tableGame,
      allDiceRolled,
      isGameReady,
      isGameOver,
      isTie,
    } = this.state;

    return (
      <div className="Height_Allscree">
        {!isGameOver ? (
          !isGameReady ? (
            <DiceBoard
              dice={dice}
              allDiceRolled={allDiceRolled}
              onDieRoll={this.onDieRoll}
              onResetDice={this.onResetDice}
              setWinner={this.setWinner}
            />
          ) : (
            <TicTacToe
              players={players}
              tableGame={tableGame}
              handleBox={this.handleBox}
            />
          )
        ) : (
          <GameOver isTie={isTie} players={players} newGame={this.newGame} />
        )}
      </div>
    );
  }
}

export default MainBoard;
