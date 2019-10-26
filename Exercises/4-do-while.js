'use strict';

const sum = (...args) => {
  let i = 0;
  let sum = 0;
  if (args.length == 0) return 0;
  do {
    sum += args[i];
    i++;
  } while (i < args.length);
  return sum;
};

module.exports = { sum };

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6
