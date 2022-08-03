// 10 ARRAY QUESTIONS

/*

1. Find Duplicates number 
X 2. Largest and Smallest number
X 3. Reverse an array
X 4. Binary Search in an array
X 5. Flatten an array
6. Insert element in to an array
7. Occurance of an integer in the array(count frequency)
8. Rearrange array alternative positve and negative
9. Remove element in place
10. Convert Sorted Array to Binary Search Tree (Arrays/Binary Trees)

*/

///////////////////////////////////////////////////////////////////////////////////////

// 2.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 88, 9, 10, -55];
function SmallestAndLargest(arr) {
  let small = arr1[0];
  let large = arr1[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }

    if (arr[i] < small) {
      small = arr[i];
    }
  }

  return { small, large };
}

// console.log(SmallestAndLargest(arr1));

// 3. Reverse

let arr2 = ["a", "b", "c"];
function ReverseArr(arr) {
  let newArr = [];
  arr2.forEach((each, i) => {
    newArr[arr.length - i - 1] = each;
  });
  return newArr;
  // return arr.reverse().join("");
}

//console.log(ReverseArr(arr2));

/////////////////////////////////////////////////

//  4. BINARY SEARCH
let arr3 = ["a", "b", "c", 1, 2, 3, "c"];
let search = "c";
let allArr = [];
let count = 0;

function BinarySearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      count++;
      allArr.push(i);
      console.log(allArr);
    }
  }
  return `${search} found at position ${allArr}`;
}

//console.log(BinarySearch(arr3));

//  1. DUPLICATES
let arr4 = ["a", "b", "c", "b", 2, "b"];
function DuplicateSearch(arr) {
  return;
}

console.log(DuplicateSearch(arr4));

/*

//  4. BINARY SEARCH
let arr3 = ["a", "b", "c", 1, 2, 3];
function BinarySearch(arr){

    return 
}

console.log(BinarySearch(arr3));
*/
