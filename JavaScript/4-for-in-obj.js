'use strict';

const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};

hash.fifth = 2;

for (const key in hash) {
  const value = hash[key];
  console.log(
    key, '\t', typeof key, '\t',
    value, '\t', typeof value
  );
}
