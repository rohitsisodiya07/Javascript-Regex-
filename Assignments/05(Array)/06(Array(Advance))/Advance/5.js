// Find the difference between two arrays.

let arr = [2, 4, 6, 8];
let arr1 = [6, 8, 10, 12];

//Using Set

let set = new Set(arr);
let set1 = new Set(arr1);

let result = [
  ...arr.filter((num) => !set1.has(num)),
  ...arr1.filter((num) => !set.has(num)),
];
console.log(result);

//Using Filter

// let result = [
//   ...arr.filter((num) => !arr1.includes(num)),
//   ...arr1.filter((num) => !arr.includes(num)),
// ];
// console.log(result);
