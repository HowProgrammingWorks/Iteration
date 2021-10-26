'use strict';

const sum = (...args) => {
  let sum = 0;
  let i = 0;
  do {
    sum += args[i] || 0;
    i = i + 1;
  } while (i < args.length);

  return sum;
};

module.exports = { sum };
