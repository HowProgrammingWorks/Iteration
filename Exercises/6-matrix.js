'use strict';

const max = matrix => {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //max = max <  matrix[i][j] ? matrix[i][j] : max;
      if (max <  matrix[i][j]) max = matrix[i][j];
    }
  }
  return max;
};


module.exports = { max };
