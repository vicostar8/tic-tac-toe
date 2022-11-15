export function generateTableGame() {
  let table = [];
  let nr = 0;

  for (let i = 0; i < 3; i++) {
    let array = [];
    for (let j = 0; j < 3; j++) {
      array.push({ id: nr, value: null, bgColor: "#a8a8a8" });
      nr++;
    }
    table.push(array);
  }
  return table;
}
