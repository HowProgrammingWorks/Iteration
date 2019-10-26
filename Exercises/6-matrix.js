'use strict';

const max = matrix => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
  let maxVal = 0;
  for (const line of matrix) {
    for (const cell of line) {
      if (maxVal < cell) maxVal = cell;
    }
  }
  return maxVal;
};
module.exports = { max };
