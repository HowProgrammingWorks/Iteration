'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const value of args) {
    sum += value;
  }
  return sum;
};

module.exports = { sum };
