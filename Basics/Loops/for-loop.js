//1.
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(i);
}
console.log(arr);
//[ 0, 1, 2, 3, 4 ]

//2. for of
for (let num of arr) {
  console.log(num);
}

/*
0
1
2
3
4
*/
