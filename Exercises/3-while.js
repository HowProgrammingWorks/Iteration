'use strict';

const sum = (...args) => {
  let sum = 0;
  let count = -1;
  while (args[++count] !== undefined) {
    sum += args[count];
  }
  return sum;
};

module.exports = { sum };
