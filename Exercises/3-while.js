'use strict';

const sum = (...args) => {
  let i = 0;
  let res = 0;

  while (i < args.length) {
    res += args[i++];
  }

  return res;
};

module.exports = { sum };
