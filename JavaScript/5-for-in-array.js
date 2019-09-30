'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

Object.prototype.inheritedProperty = 'inherited';

for (const i in numbers) {
  const value = numbers[i];
  console.log(i, typeof i, value);
}
