function multiply(x, y) {
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);
// 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
// 15

let multiplyByFour = multiply.bind(this, 4, 5);
multiplyByFour();
// 20

// METHOD TWO ---------------

let multiplyIT = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyITbyTwo = multiplyIT(2);
multiplyITbyTwo(3);
// 6

let multiplyITbyThree = multiplyIT(3);
multiplyITbyThree(3);
// 9
