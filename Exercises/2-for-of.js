'use strict';
// Use for..of loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let acc = 0;
  for (const num of args)
    acc += num;

  return acc;
};

module.exports = { sum };
