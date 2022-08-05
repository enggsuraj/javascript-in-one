const arr = [1, 2, 5, 1111, 55, 5, 6, 8, -698, 5];
console.log(arr.sort((a, b) => a - b));

function mySort(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
