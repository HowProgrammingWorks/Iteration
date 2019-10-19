'use strict';

const ages = persons => {
  const age = {};
  for (const key in persons) {
    const person = persons[key];
    age[key] = person.died - person.born;
  }
  return age;
};

module.exports = { ages };
