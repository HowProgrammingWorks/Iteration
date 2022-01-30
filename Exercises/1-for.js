'use strict';

const sum = (...args) => {
  let acc = 0;
  for (let i = 0; i < args.length; i++) {
    acc += args[i];
  }
  return acc;
};

module.exports = { sum };
