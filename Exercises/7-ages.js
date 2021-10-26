'use strict';

const ages = persons => {
  let ages = {};
  for (let name in persons) {
    const person = persons[name];
    ages[name] = person.died - person.born;
  }

  return ages;
};

module.exports = { ages };
