'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for (const value of numbers) {
  console.log(value, typeof value);
}
