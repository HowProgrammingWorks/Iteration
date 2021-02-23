'use strict';

const sum = (...args) => {
  let res = 0;
  if (args[0]) { let i = 0;
    do {
      res += args[i];
      i = i + 1;
    } while (i < args.length);
  };
  return res;
};

module.exports = { sum };
