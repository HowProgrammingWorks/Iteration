// eslint-disable-next-line quotes
"use strict";

const sum = (...args) => {
  let add = 0;
  let index = args.length - 1;
  do {
    add += args[index];
    index--;
  } while (index >= 0);
  return add;
};

module.exports = { sum };
