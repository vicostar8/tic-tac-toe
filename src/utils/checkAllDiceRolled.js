export function checkAllDiceRolled(dice) {
  let nr = 0;
  dice.map((die) => {
    if (die.isRolled) nr++;
  });
  return nr === dice.length ? true : false;
}
