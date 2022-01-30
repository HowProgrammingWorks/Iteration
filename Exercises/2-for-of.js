'use strict';

const sum = (...args) => {
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  for (const arg of args) {
    acc += arg;
  }
  return acc;
};

module.exports = { sum };
