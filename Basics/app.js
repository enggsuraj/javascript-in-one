//VARIABLES

var name = "John"; //var is function scoped.
let str = "This is a string"; //let and const are blocked scoped.
const ID = 25;

//OPERATORS
//1. ARITHMETIC : +,-,**,/,%,++,--
//2. ASSIGNMENTS : =,+=,-=,*=,/=,%=,**=
//3. COMPARISON: ==, ===, !=, !==, <,>,<=,>=,?
//4. LOGICAL: &&, ||, !
//5. BITWISE: &,|,~,<<,>>,>>>
//6. TYPE: typeof, instanceof

//STRINGS
var str1 = "Hello" + " " + name;
var str2 = `Hello ${name}`;

/* LOOPS */

const arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(i);
}
console.log(arr);

//while
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//forEach
const arr2 = [0, 1, 2, 3, 4, 5];
const arr3 = [];
arr2.forEach((n) => {
  arr3.push(n * 2);
});
console.log(arr3); //[ 0, 2, 4, 6, 8, 10 ]

//SWITCH

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

/* USE STRICT */
//With strict mode, you can not, for example, use undeclared variables.

/* FUNCTIONS */

function getName() {
  //local variable
  var name = "blogtheorem";
  console.log(name);
}
getName();

//ARROW FUNCTION
const getAdd = (a, b) => {
  return a + b;
};
const resultData = getAdd(1, 2);
console.log(resultData);

/* OBJECTS */

let obj = {
  name: "corona",
  id: 19,
  precautions: ["🙏", "🧼", "😷"],
  isPandemic: true,
  message: function () {
    console.log(`Stay Safe`);
  },
}

 //IIFE
(
  function () {
    console.log("Has to be printed");
  }
)();

//IIFE IN ES6
{
  console.log("Has to be printed");
}

/* CONSTRUCTORS */

function Employee(firstName, lastName, ID) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ID = ID;
}
//PROTOTYPE
Employee.prototype.designation = "Manager";
Employee.prototype.getID = function () {
  console.log(`ID: ${this.ID}`);
};

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

/* CLASSES & INHERITANCE */

class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  printName() {
    console.log(`Name is : ${this.name}`);
  }
  calculateID(num) {
    return this.id * num;
  }
}

class Male extends Person {
  constructor(name, id, gender) {
    super(name, id);
    this.gender = gender;
  }
  getGender() {
    console.log(this.gender);
  }
}

const objP = new Person("blogtheorem", 10);
const resultP = objP.calculateID(10);
console.log(resultP);
objP.printName();
const objM = new Male("blog", 25, "MALE");
objM.getGender();
