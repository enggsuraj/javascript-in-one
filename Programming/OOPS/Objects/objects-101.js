let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);
//Animal Farm by George Orwell

// Challenge area

let me = {
  name: "Sunny",
  age: 20,
  location: "Delhi",
};

console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
//Sunny is 20 and lives in Delhi.

me.age = me.age + 1;
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`);
//Sunny is 21 and lives in Delhi.

/************************************ */

// 1. LITERAL SYNTAX

const obj = {
  name: "suraj",
  ID: "123",
  getName: function () {
    console.log(this.name);
  },
};

//obj.getName();

//2. OBJECT CONSTRUCTOR

const obj2 = new Object();

//3.

const obj3 = Object.create(null);

// 4. CLASS ES6 CONSTRUCTOR

class Employee {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

const e = new Employee("suraj");
//e.getName();
