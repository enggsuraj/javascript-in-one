// NESTED ARR DEPTH = 2
let arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, [9, 10]],
];

console.log(arr.flat(2));
console.log([].concat(...arr));

// CUSTOM FLAT

const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar);
    }
    return result;
  });
};

console.log(customFlat(arr));

////////////////////////////////////////////////////

const arrData = [1, 2, 3, [4, [5, 6, 7], 8, [9, 10, [11, 12]]]];

function flattenArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = ret.concat(flattenArr(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenArr(arrData));
// (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
