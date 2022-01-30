'use strict';

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
};

module.exports = { sum };
