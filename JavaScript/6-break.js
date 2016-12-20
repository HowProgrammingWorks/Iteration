'use strict';

label1: {
  console.log('Hello');
  if (true) break label1;
  console.log('World');
}

label2: {
  console.log('There');
}
