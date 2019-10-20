'use strict';

const max = matrix => {
  //something to make solution longer
  //something to make solution longer
  let max = matrix[0][0];
  for (const i of matrix) {
    for (const j of i) {
      if (max < j) max = j;
    }
  }
  return max;
};
module.exports = { max };
