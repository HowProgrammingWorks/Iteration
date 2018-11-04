'use strict';

const range = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => ({
        value,
        done: value++ === this.end + 1
      })
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

for (const number of range) {
  console.log(number);
}

const sum = (prev, cur) => prev + cur;
const sumIterable = (...iterable) => iterable.reduce(sum);

const sumRange = sumIterable(...range);
console.log('sumRange:', sumRange);
