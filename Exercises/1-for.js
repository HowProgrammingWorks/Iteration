'use strict';

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

module.exports = { sum };

// Use for loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
