'use strict';

const ages = persons => {
  const result = {};
  for (const key in persons) {
    const age = persons[key].died - persons[key].born;
    result[key] = age;
  }
  return result;
};
console.log(ages({
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
}));
;

module.exports = { ages };
