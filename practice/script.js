const arr = ["a", "b", "c", "d", "e", "f"];
const str_arr = "Hi My name is Arr";

const reverse_arr = [];
arr.forEach((each, i) => (reverse_arr[arr.length - i - 1] = each));
// console.log(reverse_arr);

const new_arr = [];
for (let i = 0; i < arr.length; i++) {
  new_arr[arr.length - i - 1] = arr[i];
}

console.log(new_arr);
console.log(str_arr.split("").reverse().join(""));

const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5];

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

const arr3 = [1, 2, 3, [4, [5, 6, 7], 8, [9, 10, [11, 12]]]];
// console.log(arr3.flat(2));
// console.log([].concat(...arr3));

// function flattenArray(arr) {
//   let ret = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       ret = ret.concat(flattenArray(arr[i]));
//     } else {
//       ret.push(arr[i]);
//     }
//   }
//   return ret;
// }

// console.log(flattenArray(arr3));

function flattenArr(arr) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flattenArr(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}

console.log(flattenArr(arr3));
