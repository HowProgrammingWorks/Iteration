'use strict';

const sum = (...args) => {
  let value = 0;
  while (args.length > 0) {
    value += args.shift();
  }
  return value;
};

module.exports = { sum };
