// Count how many times each element appears in an array.

let arr = [10, 20, 10, 20, 40, 50, 20, 60, 50, 70, 80];
// let newArray = arr.reduce ( (acc, curr) => {

//     acc[curr] = ( acc[curr] || 0) + 1 ;
//     return acc ;

// }, {})
// console.log(newArray);

// Long Format
let newArray = arr.reduce((acc, curr) => {
  
    if (acc[curr]) {
    acc[curr] += 1;
  } else acc[curr] = 1;

  return acc;
  
}, {});
console.log(newArray);
