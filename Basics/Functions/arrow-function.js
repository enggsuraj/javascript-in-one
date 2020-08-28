//1.
let sum = (a, b) => {
  return a + b;
};

let result = sum(1, 5); //6
console.log(result);

//2.
let sum2 = (a, b) => a + b;
console.log(sum2(5, 6)); //11

//3.
let square = (x) => console.log(`Square: ${x * x}`);
square(10); //Square: 100

//4.
const printName = (name) => {
  console.log(`Hello ${name}`);
};
printName("blogtheorem"); //Hello blogtheorem

//5.
let setColor = (color) => {
  return { value: color };
};

let backgroundColor = setColor("Red");
console.log(backgroundColor.value); // "Red"

//6.
const people = [
  {
    name: "Dev",
    age: 27,
  },
  {
    name: "Sunny",
    age: 31,
  },
  {
    name: "Lily",
    age: 22,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const person = people.find((person) => person.age === 22);
console.log(person.name);
