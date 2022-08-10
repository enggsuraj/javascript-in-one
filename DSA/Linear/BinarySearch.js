// BINARY SEARCH
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;
/*

FIND MIDDLE ELEMENT
ALREADY SORTED ARRAY

* TARGER > MIDDLE => SEARCH RIGHT
* TARGER < MIDDLE => SEARCH LEFT
* IF MIDDLE === TARGET FOUND

*/

function BinarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}

console.log(BinarySearch(arr, target));

///////////////////////////////////////////////////////////////////////////////

// USING RECURSION

function findMe(target, start, end) {
  if (start > end) {
    return "Not Found";
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return `Found at index ${middle}`;
  }

  if (target < arr[middle]) {
    return findMe(target, start, middle - 1);
  }

  if (target > arr[middle]) {
    return findMe(target, middle + 1, end);
  }
}
