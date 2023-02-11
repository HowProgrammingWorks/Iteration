'use strict';

const max = (matrix) => {
  let max = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      max = Math.max(max, num);
    }
  }
  return max;
};

module.exports = { max };
