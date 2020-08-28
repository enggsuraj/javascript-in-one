/* CLOSURES */

//innerfunction has access to outer variable

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(innerFunction, outerVariable);
  };
}

const newResult = outerFunction("outer");
newResult("inner");
//OR
outerFunction("outer")("inner");
