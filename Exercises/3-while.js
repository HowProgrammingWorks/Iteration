'use strict';

const sum = (...args) => {
  let res = 0;
  let i = 0;
  while (i < args.length) {
    res += args[i];
    i++;
  }
  return res;
};

module.exports = { sum };
