'use strict';

const ages = persons => {
  const ags = {};
  for (const key in persons)
    ags[key] = persons[key].died - persons[key].born;
  return ags;
};

module.exports = { ages };
