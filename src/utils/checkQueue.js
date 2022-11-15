export function checkQueue(players) {
  let currentPlayer = null;
  let nextPlayer = null;

  for (let i = 0; i < players.length; i++) {
    if (players[i].isCurrentPlayer)
      currentPlayer = {
        current: players[i],
        text: `Player ${players[i].id} (${players[i].value})`,
      };
    else
      nextPlayer = {
        current: players[i],
        text: `Player ${players[i].id} (${players[i].value})`,
      };
  }

  return { currentPlayer, nextPlayer };
}
