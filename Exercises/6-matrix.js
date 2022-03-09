'use strict';

const max = (matrix) => {
  let maxValue = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      const nestedArrayValue = matrix[i][k];

      if (maxValue < nestedArrayValue) maxValue = nestedArrayValue;
    }
  }

  return maxValue;
};

module.exports = { max };
