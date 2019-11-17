'use strict';

const max = matrix => {
  // Why is too short?

  const max = (a, b) => (a > b ? a : b);
  const maxValue = [];

  for (let i = 0; i < matrix.length; i++) {
    maxValue.push(matrix[i].reduce(max));
  }

  return maxValue.reduce(max);
};

module.exports = { max };

