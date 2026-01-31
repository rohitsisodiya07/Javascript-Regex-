// Merge two objects using the spread operator.

let obj = {
  name: "Rohit Sisodiya",
  age: 21,
};
let obj1 = {
  stream: "MERN",
};
let obj2 = {...obj, ...obj1}
console.log(obj2);
