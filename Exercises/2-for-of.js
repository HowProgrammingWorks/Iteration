'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const e of args) sum += e;
  return sum;
};

module.exports = { sum };
