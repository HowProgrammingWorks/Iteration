'use strict';

const max = (matrix) => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
  let max = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const val = matrix[row][col];
      max = val > max ? val : max;
    }
  }
  return max;

};

module.exports = { max };
