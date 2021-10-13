'use strict';

const sum = (...args) => {
  let sum = 0;
  let i = 0;
  while (i < args.length) {
    sum += args[i++];
  }
  return sum;
};
console.log(sum(1, 3));
module.exports = { sum };
