'use strict';

const sum = (...args) => {
  let result = 0;
  for (const i of args) {
    result += i;
  }
  return result;
};

module.exports = { sum };
