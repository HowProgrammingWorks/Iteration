'use strict';

const log = (s, i) => {
  console.log(i, s);
  return s;
};
const f1 = x => x * 2;
const f2 = x => ++x;
const compose = (...funcs) => x => funcs.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .filter(x => x > 4)
  .map(f3)
  .reduce((acc, val) => acc + val);
  console.log(res1); // 47

  [7, 10, 1, 5, 2]
    .map(log) // 0 7 // 1 10 // 2 1 // 3 5 // 4 2
    .map(x => x * 2)
    .map(log) // 0 14 // 1 20 // 2 2 // 3 10 // 4 4
    .map(x => ++x)
    .map(log); // 0 15 // 1 21 // 2 3 // 3 11 // 4 5
