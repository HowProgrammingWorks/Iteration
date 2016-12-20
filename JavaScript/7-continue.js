'use strict';

let i = 0;

label1: while (i < 10) {
  i++;
  console.log('Hello');
  if (i === 5) continue label1;
  console.log('World');
}
