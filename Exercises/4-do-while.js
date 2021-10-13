'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let sum = 0;
  let i = 0;
  do {
    sum += args[i++];
  } while (i < args.length);
  return sum;
};
console.log(sum(1, 2, 3, 6));
module.exports = { sum };
