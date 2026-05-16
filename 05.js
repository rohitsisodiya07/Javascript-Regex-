// 1. Find Second Largest Number

// let arr = [10, 5, 8, 20, 15];
// let second = [...new Set(arr)].sort( (a, b) => b-a)[1] ;
// console.log(second);

// 2. Remove Duplicates

// let arr = [1,2,2,3,4,4,5];
// let unique = [...new Set(arr)] ;
// console.log(unique);

// 3. Find Missing Number

// let arr = [1,2,3,4,6];
// let n = arr.length + 1 ;
// let actualSum = n*(n+1)/2 ;
// let getSum = arr.reduce( (acc, curr) => acc+curr, 0) ;
// console.log(actualSum-getSum);

// 4. Count Frequency

// let arr = [1, 2, 2, 3, 1, 4, 2];
// let obj = arr.reduce( (acc, curr) =>{
//     if(acc[curr]) acc[curr]++ ;
//     else acc[curr] = 1 ;
//     return acc ;
// }, {}) ;

//     console.log(obj);

// 5. Group Even and Odd
// let arr = [1,2,3,4,5,6];
// let obj = arr.reduce ( (acc, curr) => {

//     if( curr % 2 === 0){
//         acc.even.push(curr) ;
//     }
//     else{
//         acc.odd.push(curr) ;
//     }
//     return acc ;
// }, {even : [], odd : []})

// console.log(obj);

// 6. Flatten Array

// let arr = [1, [2, 3], [4, [5, 6]]];
// let flat = arr.flat(Infinity) ;
// console.log(flat);

// 10. Sort Array of Objects

// let users = [
//   { name: "Rohit", age: 22 },
//   { name: "Aman", age: 19 },
//   { name: "Kunal", age: 25 },
// ];

// let ans = users.sort((a, b) => a.age - b.age);
// console.log(ans);

// 11. Merge Two Objects
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// // let newObj = {...obj1, ...obj2} ; // Shallow Copy
// let newObj = structuredClone({ ...obj1, ...obj2 }); // Deep Copy

// console.log(newObj);

// 13. Find Highest Salary
// let employees = {
//   rohit: 50000,
//   aman: 70000,
//   kunal: 60000,
// };
// let maximum = Object.entries(employees).sort( (a, b) => b[1]-a[1])[0]
// console.log(maximum);

// 14. Convert Object to Array

let obj = {
  name: "Rohit",
  age: 22,
};

let arr = Object.entries(obj);
console.log(arr);
