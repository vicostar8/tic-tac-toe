export function getGameWinner(players, value) {
  for (let i = 0; i < players.length; i++) {
    if (players[i].value === value) {
      players[i].isWinner = true;
    }
  }
  return players;
}
