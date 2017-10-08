'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field = 'Value';
numbers[7] = 5;

for (const i of numbers) {
  console.log(i);
}
