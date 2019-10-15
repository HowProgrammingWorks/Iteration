'use strict';

const max = matrix => {
  //some comments because too short
  //some comments because too short
  let max = 0;
  for (const array of matrix) {
    for (const number of array) {
      if (max < number) {
        max = number;
      }
    }
  }
  return max;
};

module.exports = { max };
