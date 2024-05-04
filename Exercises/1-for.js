'use strict';

const sum = (...args) => {
  let answer = 0;

  for (let i = 0; i < args.length; ++i) {
    answer += args[i];
  }

  return answer;
};

module.exports = { sum };
