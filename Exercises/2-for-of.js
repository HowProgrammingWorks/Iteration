'use strict';

const sum = (...args) => {
  let res = 0;
  for (const value of args) {
    res += value;
  } return res;
};

module.exports = { sum };
