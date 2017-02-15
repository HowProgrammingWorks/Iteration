'use strict';

const arr = [7, 10, 1, 5, 2];
arr.field = 'Value';

for (let i in arr) {
  console.log(i);
}
