'use strict';

const max = matrix => {
  let max = 0;
  for (const array of matrix) {
    for (const item of array) {
      if (item > max) {
        max = item;
      }
    }
  }
  return max;
};

module.exports = { max };

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9
