'use strict';

const ages = persons => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    ages[name] = person.died - persons.born;
  }
  return data;
};

module.exports = { ages };
