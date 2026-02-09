// Remove duplicate values from an array using array methods.

let arr = [10, 20, 30, 20, 40, 10, 50, 60];

//1. Using Set

// let remove = new Set(arr) ;
// let unique = [...remove] ;

// let remove = [... new Set(arr)]
// console.log(remove);

//2. Using Reduce.
let newArr = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);
console.log(newArr);
