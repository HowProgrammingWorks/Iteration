'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item); // 0 [7, 10, 1, 5, 2] 7 ... 4 [7, 10, 1, 5, 2] 2 //etc.
});

[7, 10, 1].forEach(x => {
  console.log(x); // 7 10 1
});

[7, 10, 1].forEach(x => console.log(x)); // 7 10 1

const log = x => console.log(x);

[7, 10, 1].forEach(log); // 7 10 1
