'use strict';

const sum = (...args) => {
  if (args.length < 1) return 0;
  let sum = 0;
  let count = 0;
  do {
    sum += args[count];
  } while (args[++count] !== undefined);
  return sum;
};

module.exports = { sum };
