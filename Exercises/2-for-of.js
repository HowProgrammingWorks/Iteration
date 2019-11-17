'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const item of args) sum += item;
  return sum;
};

module.exports = { sum };
