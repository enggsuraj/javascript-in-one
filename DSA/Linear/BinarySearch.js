// BINARY SEARCH
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search = 9;
/*

FIND MIDDLE ELEMENT
ALREADY SORTED ARRAY

* TARGER > MIDDLE => SEARCH RIGHT
* TARGER < MIDDLE => SEARCH LEFT
* IF MIDDLE === TARGET FOUND

*/

function BinarySearch(arr, search) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (search < arr[mid]) {
      end = mid - 1;
    } else if (search > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}

console.log(BinarySearch(arr, search));
