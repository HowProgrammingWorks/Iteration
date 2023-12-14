'use strict';

const sum = (...args) => {
  let total = 0; 
  for (const arg of args) { 
    total += arg; 
  }
  return total;
};

module.exports = { sum };
