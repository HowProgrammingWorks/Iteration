'use strict';

const sum = (...args) => {
  let acc = 0;
  let step = 0;
  do {
    acc += args[step];
    step++;
  } while (step <= args.length);
  return acc;
};

module.exports = { sum };
