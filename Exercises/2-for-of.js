'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const arg of args)
    sum += arg;
  return sum;
};

module.exports = { sum };
