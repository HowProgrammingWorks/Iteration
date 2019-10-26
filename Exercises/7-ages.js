'use strict';

const ages = persons => {
    // this line make a solution some longest;
  const personsAge = {};
  for (const p in persons) personsAge[p] = persons[p].died - persons[p].born;
  return personsAge;
};
module.exports = { ages };
