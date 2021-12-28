'use strict';

const sum = (...args) => {
  if (args.length === 0) return 0;
  let znachenie = 0;
  do {
    znachenie += args.pop();
  }
  while (args.length > 0);
  return znachenie;
};

module.exports = { sum };
