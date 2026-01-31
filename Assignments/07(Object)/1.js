// Merge two objects using Object.assign().

let obj = {
  name: "Rohit Sisodiya",
  age: 21,
};
let obj1 = {
  stream: "MERN",
};
let obj2 = Object.assign(obj, obj1);
console.log(obj2);
