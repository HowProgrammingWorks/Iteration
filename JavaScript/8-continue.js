'use strict';

let i = 0;
while (i < 10) {
  i++;
  console.log('Hello');
  if (i === 5) continue;
  console.log('World');
}
/*
  Hello // 10 times
  World // 9 times (without i === 5)
*/
