'use strict';

const sum = (...args) => {
  let sum = 0;
  let i = 0;
  while (i < args.length) {
    sum += args[i];
    i++;
  }
  return sum;
};

module.exports = { sum };
