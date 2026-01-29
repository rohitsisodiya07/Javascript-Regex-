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
// let obj1 = {
//     name : "Rohit",
//     dob : {
//         year : 2005,
//         date : 25,
//         month : 3
//     }
// }
// let obj2 = Object.assign({}, obj1)
// obj2.dob.date = 22 ; // change because it do shallow copy
// console.log(obj2); // overwrite age of obj by obj1
// console.log(obj1); // overwrite age of obj by obj1

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
// let obj = {
//   name: "Rohit",
//   age: 22,
//   course: "MERN",
// };
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

// console.log("name" in obj);

// const s1 = Symbol("123") ;
// const s2 = Symbol("123") ;
// console.log( s1 == s2);
// console.log( s1 === s2);

//DEEP COPY

// const obj1 = {
//   name: "Rohit",
//   dob: {
//     date: 25,
//     month: 3,
//     year: 2005,
//   },
// };
// const obj2 = structuredClone(obj1);
// obj1.dob.date = 22;
// console.log(obj2);
// console.log(obj1);

//FREEZE [Not Done Modify, add and delete]
// let obj = {
//   name : "Rohit",
//   age : 21
// }
// Object.freeze(obj)
// obj.rollno = 21 ;
// obj.name = "Rohit Sisodiya"
// delete obj.age ;

// console.log(obj);
// console.log(Object.isFrozen(obj));

//SEAL [Only Modify]
// let obj = {
//   name : "Rohit",
//   age : 21
// }
// Object.seal(obj)
// obj.rollno = 21 ;
// obj.name = "Rohit Sisodiya"
// delete obj.age ;

// console.log(obj);
// console.log(Object.isSealed(obj));

//PREVENTEXTENSIONS [Modify, Delete]
// let obj = {
//     name : "Rohit",
//     age : 25
// }
// Object.preventExtensions(obj) ;
// obj.rollno = 32 ;
// obj.age = 35;
// delete obj.name ;

// console.log(obj);
// console.log(Object.isExtensible(obj));

//DESTRUCTURING
// let obj = {
//   name : "Rohit",
//   age : 21,
//   rollno : 7274
// }

//First Way ( Easy Way )
// let a = obj.name
// let b = obj.age

// console.log(a, b);

//Second Way
// const { name : myName, age: myAge} = obj ; //same name as keys
// console.log(myName, myAge);
  //Using rest

  // const{ name, ...rest} = obj ;
  // console.log(name, rest);
  

//OPTIONAL CHAINING(?.)
  // let obj = {

  //     name : "Rohit",
  //     age : 22
  // }
  // console.log(obj.name);
  // // console.log(obj.address.city); //Shows Error
  // console.log(obj.address?.city ); 
  

//NULLISH COALESCING OPERATOR.(??)

// console.log(10 ?? undefined);
// console.log(10 ?? null);
// console.log(undefined ?? null);
// console.log("" ?? 52);

/***************************************** */
  // let obj = { name : "abc"} ;
  // let obj1 = { name : "abc"} ;
  // console.log( obj == obj1);//false [Not Same Reference]
  // console.log( obj === obj1);//false
    
    // let obj = { name : "abc"}
    // let obj1 = obj ;
    // console.log( obj === obj1);//True[Same Reference]
    
  


  
  
