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

// console.log( null >= 0);
// console.log( null <= 0);
// console.log( null > 0);
// console.log( null < 0);
// console.log( null == 0);
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

// console.log(b.toPrecision(5)); // how much values we want
// console.log(typeof b.toPrecision(5)); // String

// console.log(b.toString()); //convert to string

//NON PRIMITIVE : REFERENCE BASIS PR COMPARE.
//PRIMITIVE : COPY BY VALUE.

//MATH

// console.log(Math.abs(-4)); // Absolute ( Convert to Positive )
// console.log(Math.PI); //Value of Pi
// console.log(Math.LN10); //Value of Log 10
// console.log(Math.SQRT2); //Value of Square Root of 2.
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
const obj = {
  name: "Rohit",
  age: 23,
};

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

for( let [key,value] of Object.entries(obj)){

    console.log(key, value);
    
}

//Destructuring of Object
// const { name, age } = obj;

// console.log(name, age);
