// let arr = [] ;
// arr[0] = 10 ;
// arr[1] = 20 ;

// arr.push(30)
// console.log(arr);
// console.log(arr.length);
// arr.length = 0 ; // clear array
// console.log(arr);

// let newArr = new Array(100, 200, 300) ;
// console.log(newArr);

// let arr = [10, 20] ;

//push
// arr.push(30) ;
// arr.push(40) ;
// console.log(arr);

//pop
// console.log(arr.pop()) ;
// console.log(arr);

//shift
// console.log(arr.shift()) ;
// console.log(arr);

//unshift
// arr.unshift(100)
// console.log(arr);

//concat
// let arr2 = [100, 200, 300] ;
// let newArray = arr.concat(arr2)

// console.log(newArray);

//slice
// console.log(arr.slice(0,2)); //print less than 2

//splice
// arr.splice(0,
//  0, 20, 30, 50)
// console.log(arr);

//includes
// let arr1 = [20, 30, 40] ;
// console.log(arr1.includes(20));

//reverse
// arr.reverse();
// console.log(arr);

//join
// let arrSc = ["Rohit", "Sisodiya"];
// let str = arrSc.join(" ") ;
// console.log(str);
// console.log(typeof(str));

// let str = "Hey i am Rohit" ;
// console.log(str.split(" ").reverse().join(" "));

//Every Method. // And Operator
// let arr = [10, 20, 40, 210] ;
// let arr1 = arr.every((val) => val > 100) ;

// console.log(arr1);

//some // or Operator
// let arr = [10, 20, 40, 210] ;
// let arr1 = arr.some((val) => val > 100) ;

// console.log(arr1);

//flat
// let arr = [10, 20, [30, [40, [50]]]] ;

// let arr1 = arr.flat(Infinity) ;
// console.log(arr1);

// Rest Parameter and Spread Operator.

//Rest

// function abc(...para) {
//   console.log(para);
// }
// abc(1, 2, 3, 5, 7);
//********************** */
// function abc(name, ...para) {
//   console.log(para);
//   console.log(name);

// }
// abc("Rohit", 1, 2, 3, 5, 7);

//Spread

// function abc(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// let arr = [10, 20, 30, 40];
// abc(...arr);

// let arr = [10, 20, 30, 40, 50]
// let arr1 = [...arr] ; // copy one array to another.
// console.log(arr);
// console.log(arr1);

// let arr = [10, 20, 30] ;
// let arr1 = [40, 50, 60] ;
// let arr3 = [...arr, ...arr1] // combine two arrays.
// console.log(arr3);

// Use of Both
// function abc(a, b, c, ...para) {
//   console.log(para, a, b, c);
// }
// let arr = [10, 20, 30];
// abc(...arr, 1, 2, 3, 5, 7);

//Shallow Copy and Deep Copy

// let arr = [10, 20, 30, 40, 50] ;

// let arr1 = [...arr] ; // Not Changed in Actual Array Create Shallow Copy
// arr1[0] = 20 ;
// console.log(arr);
// console.log(arr1);
//***************************** */
// let arr = [10, 20, 30, 40, 50] ;

// let arr1 = arr; // Changed in Actual Array
// arr1[0] = 20 ;
// console.log(arr);
// console.log(arr1);

//********************************************** */
// let arr = [{ a :1}, {b : 2}] ;

// // let arr1 = [...arr] ;// Changed Because of Shallow Copy
// let arr1 = structuredClone(arr) ;// Not Changed Because of Deep Copy
// arr[0].a = 5 ;
// console.log(arr1);
// console.log(arr);

//DESTRUCTURING
// let arr = [10, 20, 30 , 40, 50] ;
// let [a, b, c, ...rest] = arr ;
// console.log(a, b, c, rest);

// let arr = [10, 20, 30] ;
// arr[10] = 40 ;
// console.log(arr);
// console.log(typeof arr);

// let a = [10, 20 , 30] ;
// console.log(Array.isArray(a));

//*********************************************** */
// let arr = [10, 20, 30, 40] ;
// //1.    push()
//     // arr.push(50) ;
//     arr.pop() ;
//     console.log(arr);

// let arr = [10, 20, 30, 40] ;
// let arr1 = arr.splice(0, 2, 75) ;
// console.log(arr);

// console.log(arr1);

// let arr = [10] ;
// arr.fill("Tere Namm") ;
// console.log(arr);

// let arr = [10, 20, 30 ] ;
// let varr = arr.copyWithin(0, 1)
// console.log(varr);
// console.log(arr);

//ForEach Loop [ iterate Array]

// let arr = [10, 20, 30, 40, 50];
// arr.forEach((num) => {
//   console.log(num);
// });

// let arr = [10, 20, 30, 40, 50];
// arr.forEach((num, index, arr) => { // have three parameter
//   console.log(num, index, arr);
// });

//Sum of Array
// let arr = [10, 20, 30, 40, 50];
// let sum = 0 ;
// arr.forEach((num) =>{

//         sum += num ;
// })
// console.log("Sum = ",sum);
