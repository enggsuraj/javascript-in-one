// map vs forEach

// const arr = [1, 2, 3, 4, 5];

// const new_arr = arr.map((each) => {
//   return each * 2;
// });

// console.log(new_arr);

// arr.forEach((each, i) => {
//   console.log(each);
//   arr[i] = each * 5;
// });

// console.log(arr);

// null and undefined

// let a;
// console.log(a);

// a = null;
// console.log(a);

// console.log(typeof null);
// console.log(typeof undefined);

// // EVENT DELEGATGION

// document.querySelector("#categories").addEventListener("click", (e) => {
//   console.log(e.target.id);
//   window.location.href = e.target.id;
// });

// FLATTEN THE ARRAY

// NESTED ARR DEPTH = 2
// let arr = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7, 8, [9, 10]],
// ];

// console.log(arr.flat(2));
// console.log([].concat(...arr));

// const customFlat = (arr, depth = 1) => {
//   let result = [];
//   arr.forEach((ar) => {
//     if (Array.isArray(ar) && depth > 0) {
//       result.push(...customFlat(ar, depth - 1));
//     } else {
//       result.push(ar);
//     }
//     return result;
//   });
// };

// console.log(customFlat(arr));

// var let const

// a = 1;
// console.log(a);
// var a;
// console.log(a);

// let b;
// console.log(b);
// b = 2;
// console.log(b);

// var = fn scoped

// {
//   var a = 1;
//   const b = 2;
//   console.log(b);
// }

// console.log(a);
//console.log(b);

// decalration
// var x = 1;
// var x = 2;

// let y = 1;
// let y = 2; not allowed

// let obj1 = {
//   firstname: "Suraj",
//   lastname: "Gehlot",
//     printName: function () {
//       console.log(this.firstname, this.lastname);
//     },
// };

// let obj2 = {
//   firstname: "Dhiraj",
//   lastname: "Gehlot",
//     printName: function () {
//       console.log(this.firstname, this.lastname);
//     },
// };

// function printName([designation, ID]) {
//   console.log(this.firstname, this.lastname, designation, ID);
// }

// printName.call(obj1, "Coder", 123);
// printName.call(obj2, ["Coder", 123]);

// let getName = printName.bind(obj1, "Programmer", 123);

// getName();

// fucntion currying
// function addFive(a) {
//   return a + 5;
// }

// function subThree(a) {
//   return a - 3;
// }

// let d = addFive.bind(this, 5);
// console.log(d());

// const evaluate = compose(addFive, subThree);
// console.log(evaluate(10));

// promise.all
(function () {})();
