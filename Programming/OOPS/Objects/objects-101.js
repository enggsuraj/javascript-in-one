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
