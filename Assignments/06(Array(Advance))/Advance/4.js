// Find the intersection of two arrays.

let arr = [10, 20, 30];
let arr1 = [10, 30, 50, 40];

//Using reduce

// let result = arr1.reduce((acc, curr) => {
//   if (arr.includes(curr)) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);
// console.log(result);

//using filter

let result = arr.filter( num => arr1.includes(num))
console.log(result);

// Using for loop

// let result = [];

// for (let val of arr) {
//   if (arr1.includes(val)) {
//     result.push(val);
//   }
// }
// console.log(result);
