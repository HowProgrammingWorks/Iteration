'use strict';

const ages = (persons) => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    data[name] = person.died - person.born;
  }
  return data;
};

module.exports = { ages };
