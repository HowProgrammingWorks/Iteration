'use strict';

const max = matrix => {
  let result = []
  for (let elem = 0; elem < matrix.length; elem++) {
    result.push(...matrix[elem]);
  }
  const maxValue = result.sort((a, b) => a - b).pop();
  return maxValue;
  //*******************
};

module.exports = { max };
