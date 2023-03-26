'use strict';

const max = (matrix) => {
  let maximum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maximum) {
        maximum = matrix[i][j];
      }
    }
  }
  return maximum;
};

module.exports = { max };
