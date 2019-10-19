'use strict';

const max = matrix => {
  let max = 0;
  for (const i of matrix) {
    for (const j of i) {
      if (j > max) max = j;
    }
  }
  return max;
};

module.exports = { max };
