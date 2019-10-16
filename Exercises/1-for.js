'use strict';

// Use for loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let acc = 0;
  for (let i = 0; i < args.length; ++i)
    acc += args[i];
  return acc;
};

module.exports = { sum };
