'use strict';

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

const max = (a, b) => (a > b ? a : b);

const res = matrix
  .map(row => row.reduce(max))
  .reduce((acc, rowMax) => acc + rowMax);

console.log(res); // 29

let i, j, row, col;
for (i in matrix) {
  row = matrix[i];
  for (j in row) {
    col = row[j];
    console.log(i, j, col);
  }
}
/*
  0 0 7 ... 0 4 2
  ...
  3 0 -6 ... 3 4 0 //etc.
*/
