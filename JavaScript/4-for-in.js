'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field = 'Value';

for (const i in numbers) {
  const value = numbers[i];
  console.log(i, value);
}

let j, value;
for (j in numbers) {
  value = numbers[j];
  console.log(j, value);
}
