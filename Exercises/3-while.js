'use strict';

const sum = (...args) => {
  let sum = 0, i = 0;
  const len = args.length;
  while (i < len) {
    sum += args[i++];
  }
  return sum;
};

module.exports = { sum };
