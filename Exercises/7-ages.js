'use strict';

const ages = persons => {
  const res = {};
  for (const key in persons) {
    // value = date of death - date of birth
    res[key] = persons[key].died - persons[key].born;
  }
  return res;
};

module.exports = { ages };
