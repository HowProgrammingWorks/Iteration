'use strict';

const sum = (...args) => {
  let result = 0;

  for (const val of args) {
    result += val;
  }

  return result;
};

module.exports = { sum };
