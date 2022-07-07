/******************** 1. ARRAY DESTRUCTURING ********************/

// we have an array with the name and surname
let alphabet = ["A", "B", "C", "D"];

// destructuring assignment
// const a = alphabet[0]
// cosbt b = alphabet[1]

let [a, b] = alphabet;
console.log(a, b);

/******************** 2. SPREAD OPERATOR ********************/

let num = [0, 1, 2, 3, 4, 5];

let [x, , y, ...rest] = num;
console.log(x, y); // 0 1
console.log(rest); // [ 2, 3, 4, 5 ]

let newArr = [...alphabet, ...num];
console.log(newArr); //["A", "B", "C", "D", 0, 1, 2, 3, 4, 5];

/******************** 3. ARRAY DESTRUCTURING ********************/
let obj = {
  name: "blogtheorem",
  ID: 123,
  address: {
    city: "New York",
    Area: "01/55",
  },
};

let { name, ID } = obj;
console.log(name, ID);
//blogtheorem 123

//IF YOU WANT TO USE YOUR OWN VARIABLE
let { name: firstname, ID: myID, ...rest1 } = obj;
console.log(firstname, myID);
//blogtheorem 123

console.log(rest1);
//{ address: { city: 'New York', Area: '01/55' } }

/******************** 4. Examples ********************/

const sumAndMultiply = (m, n) => {
  return [m + n, m * n];
};

const [sum, multiply] = sumAndMultiply(2, 9);
console.log(sum);
console.log(multiply);
