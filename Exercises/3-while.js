'use strict';

const sum = (...args) => {
  let result = 0;
  while (args.length > 0) {
    result += args.pop();
  } return result;
};

module.exports = { sum };
