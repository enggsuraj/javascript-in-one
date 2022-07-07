/*

const multiply = function (x) {
  return function (y) {
    return function (m) {
      return function (n) {
        console.log(x * y * m * n);
      };
    };
  };
};

multiply(2)(3)(5)(8);

*/

const multiply = function (x) {
  return function (y) {
    if (y) {
      return multiply(x * y);
    } else {
      return x;
    }
  };
};

console.log(multiply(2)(3)(5)());
// 30
