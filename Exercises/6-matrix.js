'use strict';

const max = (matrix) => {
  let maxValue = -Infinity; 

  for (const row of matrix) { 
    for (const value of row) {
      if (value > maxValue) {
        maxValue = value; 
      }
    }
  }

  return maxValue; 
};

module.exports = { max };
