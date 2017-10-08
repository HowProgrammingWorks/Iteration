'use strict';

const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

matrix.forEach((row, i) => {
  row.forEach((col, j) => {
    console.log(i, j, col);
  });
});
