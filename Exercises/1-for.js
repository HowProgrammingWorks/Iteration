'use strict';

const sum = (...args) => {
  let answer = 0;
  const len = args.length;

  for (let i = 0; i < len; ++i) {
    answer += args[i];
  }

  return answer;
};

module.exports = { sum };
