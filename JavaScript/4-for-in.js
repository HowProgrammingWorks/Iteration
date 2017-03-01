'use strict';

const arr = [7, 10, 1, 5, 2];
arr.field = 'Value';

for (let i in arr) {
  let value = arr[i];
  console.log(i, value);
}

let j, value;
for (j in arr) {
  value = arr[j];
  console.log(j, value);
}
