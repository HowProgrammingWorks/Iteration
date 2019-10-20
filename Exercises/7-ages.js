'use strict';

const ages = persons => {
  const ageList = {};
  for (const index in persons) {
    ageList[index] = persons[index]['died'] - persons[index]['born'];
  }
  return ageList;
};
module.exports = { ages };
