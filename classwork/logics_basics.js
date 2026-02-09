// Number convert
// let a = "123" ;
// console.log(Number(a)); //Convert to Number
// console.log(typeof Number(a)); // Number

// let a = "123ac"
// console.log(Number(a)); //NaN
// console.log(typeof Number(a)); // Number

// let a = true ;
// console.log(Number(a)); //1
// console.log(typeof Number(a)); // Number

// let a =  null ;
// console.log(Number(a)); //0
// console.log(typeof Number(a)); // Number

// let a;
// console.log(Number(a));//NaN
// console.log(typeof Number(a)); // Number

// string convert
// console.log(String(123)); // 123
// console.log(typeof String(123)); // string

// console.log(String(true)); // true
// console.log(typeof String(true)); // string

// console.log(String(null)); // null
// console.log(typeof String(null)); // string

// console.log(String(undefined)); // undefined
// console.log(typeof String(undefined)); // string

// Boolean Converson
// console.log(Boolean(12)); // true
// console.log(Boolean(0));//false
// console.log( typeof Boolean(0));//boolean

// console.log(Boolean("Hii")); //true
// console.log(Boolean(""));//false
// console.log(typeof Boolean(""));//boolean

// console.log(Boolean(null)); //false
// console.log(typeof Boolean(null));//boolean

// console.log(Boolean(undefined)); //false
// console.log(typeof Boolean(undefined));//boolean

//RULES
//1. Null is Loosely Equal to Undefined Only.

// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null == ""); // false
// console.log(null == false); // false
// console.log(null == true); // false

// >, <, >=, <= (Null => Number(treat null equal to 0), Undefined => NaN)

// console.log( null >= 0);//true
// console.log( null <= 0);//true
// console.log( null > 0);//false
// console.log( null < 0);//false
// console.log( null == 0);//false
// console.log( null >= undefined); //false

// console.log( "Rohit" > "Mohit"); // true // Compare ASCII Value of R and M Firstly
// console.log( "Rohit" > "mohit"); // false // Compare ASCII Value of R and m Firstly

//Logical Operator ( &&, || )

// let a = "" ;
// let b = "Rohit" ;
// let c = a && b ;
// console.log(c);

// let a = 0 ;
// let b = 10 ;
// let c = a && b ;
// console.log(c);

//&& : If first value if false, it will return the first value itself.
//if first value is true, it will return second value.

// or
// let a = 0 ;
// let b = 20
// console.log(a || b);
// ( || ) : If first value if true, it will return the first value itself.
//if first value is false, it will return second value.

//Number

let a = 10;
let b = 295.3452;
// console.log(b.toFixed(1)); //Convert to string, not change in actual value, return new value.
// console.log( typeof (b.toFixed(1))); //String

// console.log(a.toPrecision(5)); // how much values we want
// console.log(typeof b.toPrecision(5)); // String

// console.log(b.toString()); //convert to string

//NON PRIMITIVE : REFERENCE BASIS PR COMPARE.
//PRIMITIVE : COPY BY VALUE.

//MATH

// console.log(Math.abs(-4)); // Absolute ( Convert to Positive )
// console.log(Math.PI); //Value of Pi
// console.log(Math.LN10); //Value of Log 10
// console.log(Math.sqrt(144)); //Value of Square Root of 2.
// console.log(Math.ceil(3.2)); // convert to upper value
// console.log(Math.floor(3.2)); // convert to Lower value
// console.log(Math.max(8, 100, 500, 5000)); // give maximum value

// console.log(Math.floor(Math.random()*10)+1); // Range between 1 - 10 .
// [0, 1] :It Will Generate value between 0 and 1, where 0 is included but 1 is excluded.

// console.log(Math.floor(Math.random()*6)+1);

// 15 - 25.

// console.log(Math.floor(Math.random()*11)+15);
//Math.floor(MATH.random()*(max-min+1))+min

// OTP GENERATE : 4 Digit ( 1000 - 9999 ).

// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// console.log(Math.floor(Math.random()*(6-1+1))+1);

// String

let nam = "Rohit Sisodiya Rohit Sisodiya";
// console.log(nam.indexOf('Siso')); // First Occurence
// console.log(nam.lastIndexOf('Siso')); //Last Occurence
// console.log(nam.includes('Siso')); //Check Present or Not

//DATE
// let now = new Date() ;

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getMonth()+1);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

//Days : Mon - Tue ( 1 based )
//Months : 0 based

//Timestamp
// const now = Date.now() ;
// // console.log(now); // in millisecond
// const date = new Date(now)
// console.log(date.toString());

// Array
// let names = [ "Rohit", "Akshay", "Bob", "Charlie", "Tina"] ;
// names.sort() ;
// names.reverse()
// console.log(names);

// let number = [ 10, 5, 80, 60, 40, 3, 5, 6, 50] ;
// // number.sort( (a, b) => a-b) ;
// number.sort( (a, b) => b-a) ;
// console.log(number);

//Flatten Array
// let arr = [10, 20, 30, 40, [50, 60, [70, 80]], 90, 100] ;
// let flate = arr.flat(Infinity)
// console.log(flate);

//Object

//create
// const obj = {
//   name: "Rohit",
//   age: 23,
// };

//read
// console.log(obj["name"]);

//update
// obj.name = "Rohit Sisodiya" ;
// console.log(obj["name"]);

//delete
// delete obj.age ;
// console.log(obj);

//keys
// console.log(Object.keys(obj));

//values
// console.log(Object.values(obj));

//key and value
// console.log(Object.entries(obj));

//Loop
// for (let key in obj) {
//   console.log(key, obj[key]);
// }
// for (let key of Object.keys(obj)) { //For Getting Keys
//   console.log(key);
// }

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

//Destructuring of Object
// const { name, age } = obj;

// console.log(name, age);

// Methods in Object

// let obj = {
//   name : "Rohit Sisodiya",
//   age : 21,
//   email : "rohitsisodiya2503@gmail.com",
//   greet : function(){
//     console.log(`Hey!!! Welcome in Methods ${this.name}`);
//     return 21 ;
//   }
// }
// // obj.greet() ;
// const val = obj.greet() ;
// console.log(val);

//Nested Object
// let obj = {
//   name: "Rohit",
//   age: 21,
//   address: {
//     city: "Jaipur",
//     state: "Rajasthan",
//   },
// };
// console.log(obj.address.city);

//Shallow Copy [Not Copy on more than one level ]

// let obj2 = { ...obj };

// obj2.address.city = "Ajmer"; // change in actual object
// console.log(obj);
// console.log(obj2);

//Deep Copy
// let obj2 = structuredClone(obj) ;
// obj2.address.city = "Ajmer"; // Not Change in Actual Object Because of Deep Copy.
// console.log(obj);
// console.log(obj2);

//key : string || symbol
const sym = Symbol("id");
let obj = {
  name: "Rohit",
  0: 10,
  1: 20,
  [sym]: "Hello Boss!!",
};
// console.log(obj[sym]);

// console.log(obj[0]);
// console.log(obj["1"]);

// let arr = [10, 20, 30, 40]; //Array Also Store as Object Key Value
// arr {
//     0 : 10,
//     1 : 20,
//     3 : 30,
//     4 : 40
// }

// Function
//function declaration
// function greet() {
//   console.log("Hey! I am Function");
// }
// greet()

//For not write num para again and again we use rest opeartor
// function getSum(num1, num2, num3 = 0) {
//   return num1 + num2 + num3;
// }
// console.log(getSum(2, 4));
// console.log(getSum(2, 4, 6));

//Rest Operator Convert Values into Array
// function getSum(...num) {
//   let sum = 0;
//   for (let value of num) {
//     sum += value;
//   }
//   return sum;
// }
// console.log(getSum(12, 34));
// console.log(getSum(12, 34, 21, 20, 41, 30));

//Rest or Spread Operator

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [100, 200, 300] ;

//rest
// const [one, two, ...num] = arr1;
// console.log(one, two, num);

//spread
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

//Types of Function Declare
//1. Function Declaration(Normal Function)
// console.log(addNum(20, 30));
// function addNum(num1, num2) {
//   return num1 + num2;
// }

//2. Function Expression //Call After Declare
// let addNum = function (a, b) {
//   return a+b;
// };
// console.log(addNum(20, 20));

//3. Arrow Function
// let addNum = (a, b) => {
//   return a+b ;
// }
// console.log(addNum(10, 15));

// let addNum = (a, b) => a+b ; //No Need to Write return
// console.log(addNum(10, 15));

//square
// let numSquare = num => num*num ; //No Need to use bracket if 1 parameter
// console.log(numSquare(10));

//object
// const greeting = () =>{
//   return {
//     name : "Rohit",
//     age : 21
//   }
// }
// console.log(greeting());

// const greeting = () => { name : "Rohit",age : 21} ; // it shows error
//For Handle Error we use ().
// const greeting = () => ({ name: "Rohit", age: 21 });
// console.log(greeting());

// iife function( ) // Immediately invoke Function Expression
// (function () {
//   console.log("hey");
// })();

// //Arrow Function

// (() => {
//   console.log("Hello, Morning");
// })();

//CallBack Function

// function meet() {
//   console.log("Hey, I am Meeting to You");
// }
// function dance() {
//   console.log("hey, I am Dancing");
// }
// function greet(callback) {
//   console.log("Hey, I am Greeting to You");
//   callback();
//   // dance() //Hardcore (reusable)
// }

// greet(meet);
// greet(dance);

//SCOPE [global, functional, block]
// let global = 10;

// function greet() {
//   let global = 20;

//   function meet() {
//     let global = 30;
//     console.log(global);
//   }
//   meet();
// }
// greet();

// CLOSURE

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     return count;
//   }

//   return inner;
// }
// const counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());


//USECASE OF CLOSURE
// function bankAccount() {
//   let balance = 500;

//   return {
//     deposite: function (amount) {
//       if (typeof amount == "number" && amount > 0) {
//         balance += amount ;
//         return balance;
//       } else console.log("Invalid Amount!!");
//     },
//     withdraw: function (amount) {
//       if (typeof amount == "number" && amount <= balance) {
//         balance -= amount;
//         return balance;
//       } else console.log("Please Enter Valid Amount");
//     },
//     getBalance : function(){
//           return balance ;
//         }
//   };
// }
// const user = bankAccount() ;
// user.deposite(1000);
// user.deposite(1000);
// user.withdraw(500);
// console.log(user.getBalance());




//**************************************************************************** */
//forEach()

    // let arr = [10, 20, 30, 50, 51, 61, 95] ;

    // arr.forEach( (num) =>{
    //     console.log(num);
        
    // }) //Print all Elements

    // let sum = 0 ;
    // arr.forEach( (num) => {

    //     sum += num ;
    // })
    // console.log(sum); //Sum of Array.

    // arr.forEach( (num) => {

    //     console.log(num*2);
        
    // }) //Multiply by 2
    
    // let count = 0 ;
    // arr.forEach( (num ) => {

    //     if( num % 2 == 0 ) count++ ;
    // })
    // console.log("Even Digits = ", count); //Count Even
    

    // arr.forEach( (num ) => {

    //     if( num % 2 == 0 ) console.log(num);
        
    // }) //Print Only Even


    // arr.forEach( (value, index) => {

    //     console.log(`${index} => ${value}`);
        
    // }) //Print Index With Values
    
    // arr.forEach( (num, index) => {

    //     arr[index] = num * num ;
    // })
    // console.log(arr); //Convert Array Values to Square.


/******************************************************************** */
//filter()

    // let arr = [15, 20, 32, 41, 60, 12, 33] ;

    // let newArray = arr.filter( (num) => num % 2 == 0) //Return Even Numbers
    // console.log(newArray);

    // let newArray = arr.filter( (num) => num % 2 !== 0 ) //return odd number
    // console.log(newArray);

    // let object = [ { name : "Rohit", age : 19}, { name : "Abhi", age : 17}] ;
    // let newObject = object.filter( user => user.age >= 18)
    // console.log(newObject);// Filter Object 
    
  
//********************************************************************************** */
//Map()

      // let arr = [2, 5, 7, 8] ;

      // let newArray = arr.map( (num) => num*num)
      // console.log(newArray);//Square of element
      
    // let newArray = arr.map(String)
    // console.log(newArray); //convert to string

      // let obje = [ {name : "Rohit", age : 18}, { name : "Suresh", age : 21}] ;
      // let newArray = obje.map( user => user.name)
      // console.log(newArray);
      
//************************************************************************************** */
//Reduce()

    // let arr = [2, 4, 6, 8, 8, 8, 5, 10, 6, 9] ;
    // let sum = arr.reduce( (a, b) =>{

    //     return  a+b ;
    // }, 0)
    // console.log(sum); //Sum

    // let product = arr.reduce ( (a, b) => {

    //     return a*b ;
    // }, 1)
    // console.log(product);
    
    
  // let maximum = arr.reduce( (a, b) => {

  //     if( a > b) return a ;
  //     else return b ;
  // })
  // console.log(maximum);
  

  // let countTotal = arr.reduce( (count, element) => {

  //             return count+1;
  // }, 0)
  // console.log(countTotal);
  
  // let convertToObject = arr.reduce( (acc, curr, index) =>{

  //           acc[index] = curr ;
  //           return acc ;

  // }, {})
  // console.log(convertToObject);
  

//*************************************** */
  //set()
    // let arr = [12, 14, 20, 20, 14, 50, 30, 80, 14] ;
    // let newSet = new Set(arr) ;
    // console.log(newSet); //Remove Duplicate

    //Add
    let set = new Set ;
    set.add(10)
    set.add(20)
    // set.add(30)
    // set.add(10)
    // console.log(set);

    //Delete
      // set.delete(20) ;
      // console.log(set);
      
    //has
      // console.log(set.has(20)) ;

    //set convert to array
    // let arr = [...set] ; 
    // console.log(arr);
     
    

    
    
    
