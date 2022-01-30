'use strict';

const sum = (...args) => {
  let acc = 0;
  let i = 0;
  if (!args[i]) return 0;
  do {
    acc += args[i];
    i++;
  } while (i < args.length);
  return acc;
};

module.exports = { sum };
