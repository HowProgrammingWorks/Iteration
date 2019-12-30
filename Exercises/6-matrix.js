'use strict';

const max = matrix => {
  //dont know what to add to make it 300 it is quite strange honesly other
  // requirements I can't find in here
  let max = 0;
  for (const arr of matrix) {
    for (const nested of arr) {
      if (nested > max) max = nested;
    }
  }
  return max;

};

module.exports = { max };
