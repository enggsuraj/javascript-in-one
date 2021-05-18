/*  Q1. DIFFERENT WAY TO CREATE OBJECTS IN JS */

// 1. LITERAL SYNTAX

// const obj = {
//   name: "suraj",
//   ID: "123",
//   getName: function () {
//     console.log(this.name);
//   },
// };

//obj.getName();

//2. OBJECT CONSTRUCTOR

// const obj2 = new Object();

//3.

// const obj3 = Object.create(null);

// 4. CLASS ES6 CONSTRUCTOR

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     console.log(this.name);
//   }
// }

// const e = new Employee("suraj");
//e.getName();

/*  Q2. PROTOTYPE CHAIN */

/*  Q3. CALL APPLY BIND  */

// const obj4 = {
//   name: "suraj",
//   ID: "123",
//   //   getName: function () {
//   //     console.log(this.name);
//   //   },
// };

// const getName = function (designation, ID) {
//   console.log(this.name, designation, ID);
// };

function getName(designation, ID) {
  console.log(this.name, designation, ID);
}

// const obj5 = {
//   name: "john",
//   ID: "456",
//   //   getName: function () {
//   //     console.log(this.name);
//   //   },
// };

//getName.call(obj4, "developer", 123);
//getName.apply(obj4, ["developer", 123]);

// let myName = getName.bind(obj4);
//myName("dev", 123);

/***************  Q4. **************** */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.slice(6, 8);
//console.log(result);

//slice donot mutate original arr

//splice - add/remove item in array
//splice mutate the original arr

// let result2 = arr.splice(3, 5);
//console.log(result2);

/***************  Q5. **************** */

// MAP

// FIRST CLASS Fn - FN TREATED AS VARIABLE

/*
  a function can be passed as an argument to other functions, 
  can be returned by another 
  function and can be assigned as a value to a variable. 
  
  */

// const handler = () => {
//   console.log("Hello");
// };

//document.addEventListener("click", handler);

// FIRST ORDER FN

/*
  
  First-order function is a function that doesn’t accept 
  another function as an argument and doesn’t return a function 
  as its return value.
  
  */

// const greet = () => "'hello'";

// HIFGEHR ORDER FN

/*
  Higher-order function is a function that accepts another 
   as an argument or returns a function as a return value or both.
  */

// PURE FN
/*
  A pure function can not depend on outside variables.
  The function always returns the same result if the same arguments are passed in. 
  
  */

// function priceAfterTax(productPrice) {
//   return productPrice * 0.2 + productPrice;
// }

// IMPURE FN
// var tax = 20;
// function calculateTax(productPrice) {
//   return productPrice * (tax / 100) + productPrice;
// }

// console.log(a);
// A();
// var a = 1;
// function A() {
//   console.log(a);
// }

// SWITCH

// let b = 1;
// switch (b) {
//   case 0: {
//     let name = "1";
//     break;
//   }

//   case 1: {
//     let name = "2";
//     break;
//   }
// }

// memoization

/*
  
  function fib(n) {
    if (n <= 2) {
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
  
  console.log(fib(30));
  
  */

/*
  
  function fib(n, prevValues = []) {
    if (prevValues[n] != null) {
      return prevValues[n];
    }
  
    let result;
  
    if (n <= 2) {
      return 1;
    } else {
      return fib(n - 1, prevValues) + fib(n - 2, prevValues);
    }
  
    prevValues[n] = result;
    return result;
  }
  
  console.log(fib(30));
  
  */

// 26

// prototype class inheritance

// function Bike(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Bike.prototype.getDetails = function () {
//   return this.model + this.color;
// };

/*

nums = [x1, x2, x3, y1, y2, y3]
x = [x1, x2, x3]
y = [y1, y2, y3]

splice 
slice


*/
// let nums = [1, 1, 2, 2];
// let n = 2;

// const shuffle = (nums, n) => {
//   let x = nums.slice(0, n);
//   let y = nums.slice(n, nums.length);

//   let result = [];

//   for (let i = 0; i < x.length; i++) {
//     result.push(x[i]);
//     result.push(y[i]);
//   }

//   //console.log(x, y, result);
//   return result;
// };

// const result = shuffle(nums, n);
// console.log(result);

// BLOGTHEOREM - LEETCODE

// let nums = [2, 5, 1, 3, 4, 7];
// let n = 3;

// const shuffle = (nums, n) => {
//   let x = nums.slice(0, n);
//   let y = nums.slice(n, nums.length);
//   let result = [];

//   for (let i = 0; i < x.length; i++) {
//     result.push(x[i]);
//     result.push(y[i]);
//   }
//   return result;
// };

// const result = shuffle(nums, n);
// console.log(result);

// MEDIAN SORTED ARRAY

// let nums1 = [2];
// let nums2 = [];

// const findMedianSortedArrays = (nums1, nums2) => {
//   let newArr = nums1.concat(nums2);
//   let sortedArr = newArr.sort();

//   const mid = Math.floor(sortedArr.length / 2);
//   return sortedArr.length % 2 !== 0
//     ? sortedArr[mid]
//     : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
// };

// const result = findMedianSortedArrays(nums1, nums2);
// console.log(result);

// let str = "Hello";
// let subStr = "He";

// const result = str.includes(subStr);
// console.log(result);

// const urlParam = new URLSearchParams(window.location.search);
// const clietNode = urlParam.get("clientNode");

// let objData = {
//   code: [1, 2, 3],
// };

// for (let data in objData) {
//   console.log(data);
// }

// let arr = [1, 2, 3];
// arr = [];

// // console.log(arr);

// let obj = {};

// let result = Object.keys(obj).length;

// console.log(result);

// const str = "sdfsdf";
// const answer = str.split("");
// const left = answer.splice(0, 1);
// const right = answer.splice(0, answer.length);
// let firstLetter = [];

// firstLetter.push(left[0].toUpperCase());

// const data = firstLetter.concat(right);

// console.log(data.join(""));

// const str = "sdfsdf";
// console.log(str.charAt(0).toUpperCase() + str.slice(1));

// let today = new Date();
// let dd = today.getDate();
// var yyyy = today.getFullYear();

// console.log(dd, yyyy);
