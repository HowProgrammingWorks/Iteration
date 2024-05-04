'use strict';

const sum = (...args) => {
  let answer = 0;

  if (args.length === 0) return answer;

  do {
    answer += args.pop();
  } while (args.length > 0);

  return answer;
};

module.exports = { sum };
