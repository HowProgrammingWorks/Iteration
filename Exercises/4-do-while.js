'use strict';
const sum = (...args) => {
  let res = 0;
  let i = 0;
  do {
    if (typeof args[i] === 'number') res += args[i];
    i++;
  } while (i < args.length);
  return res;
};
module.exports = { sum };
