'use strict';

const sum = (...args) => {
  let answer = 0;

  for (const num of args) {
    answer += num;
  }

  return answer;
};

module.exports = { sum };
