'use strict';

const sum = (...args) => {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
};

module.exports = { sum };
