// 31. What is the difference between sort() and toSorted()?

//sort() // Sort Method Sort the Array But Change in Actual Array.

// let arr = ["Rohit", "Mohit", "Akshay", "Bob"];
// arr.sort();
// console.log(arr);

//toSorted // toSorted Method Sort the Array and Return New Array
let arr = ["Rohit", "Mohit", "Akshay", "Bob"];
let newArr = arr.toSorted();
console.log(newArr);
console.log(arr);

