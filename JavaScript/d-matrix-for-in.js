'use strict';

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

for (const i in matrix) {
  const row = matrix[i];
  for (const j in row) {
    const col = row[j];
    console.log(i, j, col);
  }
}
