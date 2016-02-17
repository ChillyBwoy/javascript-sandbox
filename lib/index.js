require('babel-core/register');
require('babel-polyfill');

// const g = (for (x of [1, 2, 3]) x * x);

function *gena() {
  yield "one";
  yield "two";
  yield "three";
}
