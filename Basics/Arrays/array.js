// TODO: ARRAYS DATA STRUCTURE
/**
 * ! JavaScript arrays are used to store multiple values in a single variable.
 */

//static array
var cars = ["Saab", "Volvo", "BMW"];
var cars = new Array("Saab", "Volvo", "BMW");

var name = cars[0];
cars[0] = "Tata";

//dynamic array
const arrDy = new Array();

/****************** Array Properties and Methods ******************/
var len = cars.length;
var sortData = cars.sort();

/****************** foreach ******************/
var numArray = [11, 22, 33, 44, 55];
numArray.forEach(function (value, index) {
  console.log(value, index);
});

//for loop
var ourArray = [];
for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}
console.log(ourArray);

/****************** push() ******************/
var numArr = [1, 2, 3, 4, 5];
numArr.push(6);
console.log(numArr); //[ 1, 2, 3, 4, 5, 6 ]

/****************** pop() ******************/
numArr.pop();
console.log(numArr); //[ 1, 2, 3, 4, 5]

/****************** shift() ******************/
numArr.shift();
console.log(numArr); //[2, 3, 4, 5]

/****************** unshift() ******************/
numArr.unshift(1);
console.log(numArr); //[1, 2, 3, 4, 5]

/****************** indexof() ******************/
console.log(numArr.indexOf(5)); //4

/****************** splice() ******************/
/**
 * ! The splice() method can be used to add new items to an array
 * ! (position, howmanyelementtoremove, itemstobeadded)
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//[Banana,Orange,Lemon,Kiwi,Apple,Mango]

/*
? The first parameter (2) defines the position where new elements should be added (spliced in).
? The second parameter (0) defines how many elements should be removed.
? The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
? The splice() method returns an array with the deleted items:
*/

/****************** splice() ******************/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits

/****************** slice() ******************/
//The slice() method slices out a piece of an array into a new array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
//Orange,Lemon,Apple,Mango
var citrus = fruits.slice(3);
//Apple,Mango

/****************** concat() ******************/
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
console.log(typeof fruits.toString());

/****************** toString() ******************/
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(myChildren);

/****************** reverse() ******************/
const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log("reversed:", reversed);

/****************** map() ******************/

const newArray = [1, 4, 9, 16];

// pass a function to map
const mapResult = newArray.map((x) => x * 2);

console.log(mapResult);
// expected output: Array [2, 8, 18, 32]

/****************** filter() ******************/

//TODO: The filter() method creates a new array with array elements that passes a test.

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

/****************** join() ******************/

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join());

/**********************************************************************************************/
//TODO : PROGRAMMING QUESTION

/*
QUESTION 1: Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//METHOD 1: BRUTH FORCE - O(n^n)
(nums = [7, 4, 8, 2]), (target = 9);

var twoSum = function (nums, target) {
  for (var m = 0; m < nums.length - 1; m++) {
    for (var n = m + 1; n < nums.length; n++) {
      if (nums[m] + nums[n] === 9) {
        return [m, n];
      }
    }
  }
};

const result = twoSum(nums, target);
console.log(result);

// /////////////////////////////////
// Array.sort()
const arr = [1, 2, 5, 1111, 55, 5, 6, 8, -698, 5];
console.log(arr.sort((a, b) => a - b));
