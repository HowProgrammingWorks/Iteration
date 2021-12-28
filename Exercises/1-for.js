'use strict';

const sum = (...args) => {
  let a = 0;
  for (let i = 0; i < args.length; i++) {
    a = args[i] + a;
  }
  return a;
};
module.exports = { sum };
