'use strict';

const sum = (...args) => {
  let i = 0;
  let r = 0;

  do {
    r += args[i];
    i++;
  } while (i < args.length);

  return args.length ? r : 0;
};

module.exports = { sum };
