'use strict';

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

const max = (a, b) => (a > b ? a : b);

const res = matrix
  .map((row) => row.reduce(max))
  .reduce((acc, rowMax) => acc + rowMax);

console.log(res);

for (const row of matrix) {
  for (const item of row) {
    console.log(item);
  }
}
