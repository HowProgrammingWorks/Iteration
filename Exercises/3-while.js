'use strict';

const sum = (...args) => {
  let i = 0;
  let sum = 0;
  while (args[i]) {
    sum += args[i];
    i++;
  }
  return sum;
};
module.exports = { sum };
