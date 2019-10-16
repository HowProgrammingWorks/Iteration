'use strict';


// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let accumulator = 0;

  do {
    accumulator += args.pop() || 0;
  } while (args.length !== 0);

  return accumulator;
};

module.exports = { sum };
