'use strict';

const range = {
  start: 1,
  end: 10,
  [Symbol.asyncIterator]() {
    let value = this.start;
    return {
      next: () => Promise.resolve({
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

(async () => {
  for await (const number of range) {
    console.log(number);
  }
})();
