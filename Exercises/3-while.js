'use strict';

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  let step = 0;
  while (step < args.length) {
    acc += args[step];
    step++;
  }
  return acc;
};

module.exports = { sum };
