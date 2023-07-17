'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
};

module.exports = { ages };
