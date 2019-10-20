'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

module.exports = { sum };

// Use for..of loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
