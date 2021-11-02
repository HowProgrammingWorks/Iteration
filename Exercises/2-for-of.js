'use strict';

const sum = (...args) => {
  let value = 0;
  for (const arg of args){
     value += arg;
  }
  return value;
};
  console.log(sum(1,2,3));

module.exports = { sum };
