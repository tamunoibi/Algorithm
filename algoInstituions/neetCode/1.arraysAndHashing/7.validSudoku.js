function validSudokuBruteForce(board) {
  // solution not working
  // determine if each of the nine rows is valid
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      //this is looping in row-major: row by row
      const cell = board[i][j];

      if (cell === ".") {
        continue;
      } else if (set.has(cell)) {
        return false;
      } else {
        set.add(cell);
      }
    }
  }
  // determine if each of the nine columns is valid
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      //this is accessing items in column-major
      const cell = board[j][i];

      //check if the cell is empty
      if (cell === ".") {
        continue;
        //check if it is a duplicate value
      } else if (set.has(cell)) {
        return false;
      } else {
        // add the item to the cell
        set.add(cell);
      }
    }
  }

  // determine if each of the 9 sub-boxes is valid
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = board[3 * i + k][3 * j + l];
          if (cell === ".") {
            continue;
          } else if (set.has(cell)) {
            return false;
          } else {
            set.add(cell);
          }
        }
      }
    }
  }
  return true;
}
const input = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [5, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

const ans = validSudokuBruteForce(ans);
