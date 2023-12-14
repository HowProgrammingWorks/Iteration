'use strict';

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let total = 0; 
  for (let i = 0; i < args.length; i++) {
    total += args[i]; // Додаємо кожен аргумент до суми
  }
  return total; 
};

module.exports = { sum };
