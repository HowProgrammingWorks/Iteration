'use strict';

const sum = (...args) => {
  let i = 0, sum = 0;
  while (i < args.length) {
    sum += args[i];
    i++;
  }
  return sum;

};

module.exports = { sum };
