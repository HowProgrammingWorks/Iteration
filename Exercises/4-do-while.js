'use strict';

const sum = (...args) => {
  // Use do..while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  let step = 0;
  do {
    acc += args[step];
    step++;
  } while (step <= args.length);
  return acc;
};

module.exports = { sum };
