'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const i of args) sum += i;
  return sum;
};

module.exports = { sum };
