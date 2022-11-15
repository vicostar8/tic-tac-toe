export function isGameOver(tableGame) {
  // check ROWS
  const equalOnARow = checkRows(tableGame);
  if (equalOnARow.bool) return equalOnARow;
  // check COLUMNS
  const equalOnAColumn = checkColumns(tableGame);
  if (equalOnAColumn.bool) return equalOnAColumn;
  // check DIAGONALS
  const equalOnADiagonal = checkDiagonals(tableGame);
  if (equalOnADiagonal.bool) return equalOnADiagonal;

  return false;
}

function checkRows(tableGame) {
  for (let i = 0; i < tableGame.length; i++) {
    let elements = [];
    for (let j = 0; j < tableGame.length; j++) {
      elements.push(tableGame[i][j].value);
    }

    const row = elements.every((el) => el !== null && el === elements[0]);
    if (row) return { bool: row, value: elements[0] };
  }
  return { bool: false, value: null };
}

function checkColumns(tableGame) {
  for (let i = 0; i < tableGame.length; i++) {
    let elements = [];
    for (let j = 0; j < tableGame.length; j++) {
      elements.push(tableGame[j][i].value);
    }

    const column = elements.every((el) => el !== null && el === elements[0]);
    if (column) return { bool: column, value: elements[0] };
  }
  return { bool: false, value: null };
}

function checkDiagonals(tableGame) {
  let primaryDiag = [];
  let secondaryDiag = [];

  for (let i = 0; i < tableGame.length; i++) {
    for (let j = 0; j < tableGame.length; j++) {
      if (i === j) primaryDiag.push(tableGame[i][j].value);
      if (i + j === 2) secondaryDiag.push(tableGame[i][j].value);
    }
  }
  const d1 = primaryDiag.every((el) => el !== null && el === primaryDiag[0]);
  const d2 = secondaryDiag.every(
    (el) => el !== null && el === secondaryDiag[0]
  );
  if (d1) {
    return { bool: true, value: primaryDiag[0] };
  } else if (d2) {
    return { bool: true, value: secondaryDiag[0] };
  } else return { bool: false, value: null };
}
