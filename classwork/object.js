//Object

//1.Literal
// let obj = {
//   name: "Rohit",
//   age: 22,
//   course: "MERN",
//   email: "rohitsisodiya2503@gmail.com",

// };

//Key(Properties) - name, age, course, email
//Values - Rohit, 22, MERN, rohitsisodiya2503@gmail.com

// console.log(obj.name); // Dot Notation
// console.log(obj["age"]); //Bracket Notation
// console.log(obj);

//2.new Object Constructor

// let obj1 = new Object();
// console.log(obj1);

//a.Add Property.
// let obj1 = new Object();
// obj1.name = "Rohit";
// obj1.age = 25;

// obj1["name"] = "Rohit" ;
// obj1["age"] = 21 ;
// console.log(obj1);

//b. Update[Modify]

// let obj = {
//     name : "Rohit",
//     age : 21
// }
// obj.name = "Rohit Sisodiya" ;
// console.log(obj);

// Delete
// let obj = {
//     name : "Rohit",
//     age : 21
// }
// delete obj.age
// console.log(obj);

//Nested Object
// let detail = {
//     name : "Rohit",
//     age : 21,
//     roll : 295,
//     address : {
//             city : "Jaipur",
//             pincode : 7274
//     }
// }
// console.log(detail.address.city);
// console.log(detail["address"]['city']);

// Object Method
// let obj = {
//   name: "Rohit",
//   abc() {
//     console.log(`Hey!!! ${this.name}`);
//   },
// };
// obj.abc();

//Object Methods
// let obj = {
//     name : "Rohit",
//     age : 21,
//     course : "MERN"
// }

// For Access Keys
// console.log(Object.keys(obj));

//For Get Size
// console.log(Object.keys(obj).length);

//For Get Values
// console.log(Object.values(obj));

//for get key and value
// let arr = Object.entries(obj) ;// convert to array
// // console.log(arr);
// let sec = Object.fromEntries(arr) // convert to object
// console.log(sec);

//assign
// let obj = {
//     name : "Rohit",
//     age : 21
// }
// let obj1 = {
//     age : 22
// }
// let obj2 = Object.assign({}, obj, obj1)
// console.log(obj2); // overwrite age of obj by obj1

//this
// let obj = {
//     name : "rohit",
//     abc: ()=> { console.log(this.name);
//     }
// }
// obj.abc() // return undefined

// let obj = {
//     name : "rohit",
//     abc() { console.log(this.name);
//     }
// }
// obj.abc()

//Loop
let obj = {
  name: "Rohit",
  age: 22,
  course: "MERN",
};
// for (let key in obj) {
//   console.log(key, " = ", obj[key]);
// }

// for (let [x, y] of Object.entries(obj)) {
//   console.log(x);
//   console.log(y);
// }

//Check key exist or not

// console.log(obj.hasOwnProperty("name"));

// console.log(Object.hasOwn(obj, "name"));

console.log("name" in obj);
