'use strict';

const sum = (...args) => {
  let result = 0;
  for (let idx = 0; idx < args.length; idx++) {
    result += args[idx];
  }
  return result;
};

module.exports = { sum };
