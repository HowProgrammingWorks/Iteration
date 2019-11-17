'use strict';

const ages = persons => {
  // Why is too short?
  const obj = {};
  for (const name in persons) {
    obj[name] = persons[name].died - persons[name].born;
  }
  return obj;
};

module.exports = { ages };
