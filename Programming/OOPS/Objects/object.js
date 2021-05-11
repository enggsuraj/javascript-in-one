//1. OBJECT - COLLECTIONS OF KEY: VALUE PAIR

let obj = {
  name: "corona",
  id: 19,
  precautions: ["🙏", "🧼", "😷"],
  isPandemic: true,
  message: function () {
    console.log(`Stay Safe`);
  },
};

obj.message();
// Stay Safe

//2. OBJECT REFERENCES
// Both logs print things

let myAccount = {
  name: "John Dev",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account = {};
  account.age = 1;
  console.log(account);
  //{ age: 1 }
};
addExpense(myAccount, 2000);
console.log(myAccount);
//{ name: 'John Dev', expenses: 0, income: 0 }

// 3. Object constructor:
let object = new Object();

// 4. Object's create method:
let object = Object.create(null);

// 5. Function constructor:
function Person(name) {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object = new Person("Sudheer");

// 6. ES6 Class syntax:
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
