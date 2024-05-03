'use strict';

const sum = (...args) => {
  let answer = 0;

  do {
    let num = args.pop();
  } while (args.length > 0) {
    answer += num;
    num = args.pop();
  }

  return answer;
};

console.log(sum());

module.exports = { sum };
