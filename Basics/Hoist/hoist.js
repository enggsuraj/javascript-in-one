//Variables created using var can be accessed before they are declared
//This hoist can cause unexpected behaviour
// During creation phase js move variables and fn to top of code - this is hoisting.

//1.
var num;
num = 6;
console.log(num); // Will print: 6

//2.
age = 6;
console.log(age); // Will print: 6
var age;

//3.
var n;
console.log(n); //undefined

//4.
console.log(number); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var number; // Declaration
number = 6; // Initialization

//5.
var name = "Baggins";

(function () {
  // Outputs: "Original name was undefined"
  console.log("Original name was " + name);

  var name = "Underhill";

  // Outputs: "New name is Underhill"
  console.log("New name is " + name);
})();
