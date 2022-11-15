export function displayWinner(winner) {
  if (winner === 1 || winner === 2) return `Player ${winner} - choose X or O`;
  if (winner === 0) return `It's a TIE - Retry`;
  return "-";
}
