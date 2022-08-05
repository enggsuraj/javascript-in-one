// LINEAR SEARCH
/*

[1,2,3,4,5]
O(n)

*/

let arr = [5, 7, 9, 38, 8, 2, 55, 66];
let search = 5;

let items = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function LinearSearch(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return true;
    }
  }
  return false;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function LinearSearch2D(items, search) {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      if (items[i][j] === search) {
        return { i, j };
      }
    }
  }
  return false;
}

console.log(LinearSearch(arr, search));
console.log(findMin(arr));
console.log(findMax(arr));
console.log(LinearSearch2D(items, search));
