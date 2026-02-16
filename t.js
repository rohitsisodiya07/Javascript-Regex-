// //1.
// let obj1 = {
//   name: "Rohit",
// };
// let obj2 = {
//   age: 22,
// };

// let obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

//2.
// let obj1 = {
//   name: "Rohit",
// };
// let obj2 = {
//   age: 22,
// };

// let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

//3.
// let obj = {
//   name: "Rohit",
//   age: 22,
// };
// let dubli = structuredClone(obj);
// dubli.age = 25;

// console.log(obj);
// console.log(dubli);

//8.
// let arr = [{ name: "Rohit" }, { age: 25 }];
// let obj = Object.assign({}, ...arr);
// console.log(obj);
//

//9.

// let obj = {
//   name: "Rohit",
//   age: 22,
// };

// let arr = Object.entries(obj);
// console.log(arr);
// let newarr = arr.map(([key, value]) => `${key}=${value}`);
// console.log(newarr);
// let str = newarr.join("&");
// console.log(str);

//10.
    