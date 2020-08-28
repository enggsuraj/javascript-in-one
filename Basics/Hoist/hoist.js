//Variables created using var can be accessed before they are declared
//This hoist can cause unexpected behaviour

age = 6;
console.log(age); // Will print: 6
var age;

var num;
num = 6;
console.log(num); // Will print: 6
