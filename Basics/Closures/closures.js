/* CLOSURES */

//used to enable data privacy.

/************************* EXAMPLE 1 ******************************** */
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

/************************* EXAMPLE 2 ******************************** */

//JavaScript variables can belong to the local or global scope.
//Global variables can be made local (private) with closures.

/************************ A ************************/

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

/************************ B ************************/

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
  return counter;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 1.

/************************ C ************************/

var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
