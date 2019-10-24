'use strict';

const sum = (...args) => {
  let add = 0;
  let index = args.length - 1;
  while (index >= 0) {
    add += args[index];
    args.pop();
    index--;
  }
  return add;
};

module.exports = { sum };
