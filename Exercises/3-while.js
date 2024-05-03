'use strict';

const sum = (...args) => {
  let answer = 0;
  let num = args.pop();

  while (num) {
    answer += num;
    num = args.pop();
  }

  return answer;
};

module.exports = { sum };
