'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item);
});

[7, 10, 1].forEach((x) => {
  console.log(x);
});

[7, 10, 1].forEach((x) => console.log(x));

const log = (x) => console.log(x);

[7, 10, 1].forEach(log);
