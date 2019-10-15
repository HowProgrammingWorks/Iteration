'use strict';

const ages = persons => {
  const arr = {};
  for (const key in persons) {
    const person = persons[key];
    arr[key] = person.died - person.born;
  }
  return arr;
};

module.exports = { ages };
