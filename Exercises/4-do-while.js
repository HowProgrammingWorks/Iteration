'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let i = 0,
    sum = 0;
  do {
    sum += args[i];
    i++;
  } while (args[i]);
  return sum;
};
module.exports = { sum };
