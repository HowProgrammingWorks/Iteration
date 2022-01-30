'use strict';

const max = (matrix) => {
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
