export function checkWinner(dice) {
  let winner = dice[0];

  for (let i = 1; i < dice.length; i++) {
    if (winner.value < dice[i].value) {
      winner = dice[i];
      return winner.id;
    } else if (winner.value === dice[i].value) return 0;
  }
  return winner.id;
}
