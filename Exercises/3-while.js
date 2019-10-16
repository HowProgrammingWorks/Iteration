'use strict';

// Use while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let accum = 0;
  while (args.length !== 0)
    accum += args.pop();

  return accum;
};

module.exports = { sum };
