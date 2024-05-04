'use strict';

const sum = (...args) => {
  let answer = 0;

  while (args.length > 0) {
    answer += args.pop();
  }

  return answer;
};

module.exports = { sum };
