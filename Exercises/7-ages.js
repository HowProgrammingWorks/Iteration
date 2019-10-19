'use strict';

const ages = persons => {
  const obj = {};
  for (const i in persons) {
    persons[i].res = persons[i].died - persons[i].born;
    obj[i] = persons[i].res;
  }
  return obj;
};

module.exports = { ages };
