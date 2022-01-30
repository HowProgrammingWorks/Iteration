'use strict';

const sum = (...args) => {
  let acc = 0;
  for (const arg of args) {
    acc += arg;
  }
  return acc;
};

module.exports = { sum };
