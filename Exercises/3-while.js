'use strict';

const sum = (...args) => {
  let val = 0;
  while (args.length > 0) {
    val += args.shift();
  }
  return val;
};

module.exports = { sum };
