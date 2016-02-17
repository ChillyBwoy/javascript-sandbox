require('babel-core/register');
require('babel-polyfill');

function *range (start, finish) {
  let x = start;
  while (x <= finish) {
    yield x;
    x += 1;
  }
}

for (let x of range(0, 9)) {
  console.log(x)
}
