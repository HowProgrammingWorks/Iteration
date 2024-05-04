'use strict';

const max = (matrix) => {
  let maxNum = 0;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      const num = matrix[i][j];
      maxNum =  num > maxNum ? num : maxNum;
    }
  }

  return maxNum;
};

module.exports = { max };
