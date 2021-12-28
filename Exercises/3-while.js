'use strict';

const sum = (...args) => {
  let znachenie = 0;
  while (args.length > 0) {
    znachenie += args.pop();
  }
  return znachenie;
};

module.exports = { sum };
