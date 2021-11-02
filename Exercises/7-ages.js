'use strict';
const ages = persons => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    data[name] = person.died - person.born;
  }
  return data;
};
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
  

module.exports = { ages };
