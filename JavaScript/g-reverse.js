'use strict';

const arr = [2, 5, -1, 7, 0];

arr[Symbol.iterator] = function() {
  let index = this.length;
  return {
    next: () => ({
      done: index-- === 0,
      value: this[index]
    })
  };
};

for (const number of arr) {
  console.log(number);
}
