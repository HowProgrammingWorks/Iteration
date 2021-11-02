'use strict';

const sum = (...args) => {
  let value = 0;
  if (args.length === 0) return 0;
  do{
    value += args.pop();
  } while (args.length > 0);

  return value;
};

  console.log("Результат операции сложения: " + sum(1,2,3));
module.exports = { sum };
