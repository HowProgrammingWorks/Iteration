'use strict';

const ages = (persons) => {
  const arrYears = {};

  for (const people in persons) {
    const age = persons[people].died - persons[people].born;
    arrYears[people] = age;
  }

  return arrYears;
};

module.exports = { ages };
