'use strict';

console.log('Example 1');

for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}

console.log('Example 2');

{
  let i = 0;
  for (; i < 3; i++) {
    console.log(i); // 0 1 2
  }
}

console.log('Example 3');

{
  let i = 0;
  for (; i < 3;) {
    console.log(i++); // 0 1 2
  }
}
