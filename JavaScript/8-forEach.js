'use strict';

const a = [7, 10, 1, 5, 2];

a.forEach(function(item, i, arr) {
  console.log(i, arr, item);
});

console.log();

[7, 10, 1].forEach(console.log);

console.log();

[7, 10, 1].forEach(x => console.log(x));
