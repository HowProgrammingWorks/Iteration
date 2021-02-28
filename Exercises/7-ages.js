'use strict';

const ages = persons => {
  const personAge = {};

  for (const person in persons) {
    const { died, born } = persons[person];
    personAge[person] = died - born;
  }

  return personAge;
};

module.exports = { ages };
