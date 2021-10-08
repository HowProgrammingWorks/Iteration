'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

module.exports = { sum };
