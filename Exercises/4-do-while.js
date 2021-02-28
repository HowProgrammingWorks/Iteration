'use strict';

const sum = (...args) => {
  if (!args.length) return 0;
  let i = 0;
  let res = 0;

  do {
    res += args[i++];
  } while (i < args.length);

  return res;
};


module.exports = { sum };
