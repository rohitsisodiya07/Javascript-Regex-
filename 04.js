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

//10. Reverse String

// let str = "Rohit Sisodiya" ;
// let arr = str.split("").reverse().join("") ;
// console.log(arr);

//11. Check whether a string is palindrome or not.

// let str = "madam" ;
// let rev = str.split("").reverse().join("") ;
// if( str === rev) console.log("Pallindrome");
// else console.log("Not Pallindrome");

// 11.Remove duplicate values from array.

// let arr = [1, 2, 5, 7, 8, 9, 1, 5, 6, 4] ;
// let removeDuplicate = [...new Set(arr)]
// console.log(removeDuplicate);

//12. Find maximum number from array.

// let arr = [50, 90, 5, 7, 66, 42, 22];
// // let ans = arr.sort( (a, b) => b-a)[0] ;
// // or
// let ans = Math.max(...arr);
// console.log(ans);

// 13.Find second largest number from array.
// let arr = [10, 23, 44, 66, 45, 77, 10] ;
// let ans = [...new Set(arr)].sort( (a, b)=> b - a)[1]
// console.log(ans);

//14. Find sum of all elements in array.

// let arr = [1, 5, 4, 6, 7, 9];
// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//15. Find even numbers from array.

// let arr = [1, 5, 6, 4, 2, 7, 8, 9] ;
// let even = arr.filter( (item) => (item % 2 === 0))
// console.log(even);

//16. Find odd numbers from array
// let arr = [1, 5, 6, 4, 2, 7, 8, 9] ;
// let odd = arr.filter( (item) => (item % 2 !== 0))
// console.log(odd);

//ADVACE
//1.Find frequency of each element in array.

// let arr = [1,2,2,3,1,4] ;
// let count = arr.reduce( (acc, curr) => {

//     if(acc[curr]) acc[curr]++ ;
//     else acc[curr] = 1 ;
//     return acc ;
// }, {})
// console.log(count);

//2. Find duplicate elements from array

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let duplicate = arr.filter((item, index) => arr.indexOf(item) !== index);

// console.log([...new Set(duplicate)]);

//Write a JavaScript program to reverse a string.

// let str = "rohit" ;
// let rev = str.split("").reverse("").join("");
// console.log(rev);

// How do you merge two objects in JavaScript?
// obj1 = { name: "Rohit" };
// obj2 = { age: 21 };

//     let ans = {...obj1, ...obj2} ;
//     console.log(ans);

// Write a program to find the largest number in an array.
// let arr = [4, 7, 1, 9, 2];

// let largest = Math.max(...arr);
// console.log(largest);

// Write a program to check whether a string is palindrome or not.
// let str = "madam"
// let ans = str.split("").reverse().join("") ;
// if( str === ans ) console.log("Pallindrome");
// else console.log("Not Pallindrome");

// Write a program to count total keys in an object.

// let obj = {
//   name: "Rohit",
//   age: 21,
//   city: "Jaipur",
// };

//     let count = Object.keys(obj).length ;
//     console.log(count);
    

// Write a program to find the sum of all elements in an array.

    // let arr = [1,2,3,4] ;
    // let sum = arr.reduce( (acc, curr) => {
    //     return acc+curr ;
    // }, 0) ;
    // console.log(sum);
    
// Write a program to count vowels in a string.

    // let str = "javascript" ;
    // let vowels = "aeiouAEIOU" ;
    // let count = 0 ;
    // for( let val of str){

    //     if(vowels.includes(val)){
    //         count++;
    //     }
    // }
    // console.log(count);
    
// Write a program to convert an object into an array.
//     let obj = {
//    name: "Rohit",
//    age: 21 ;
// }

//     let arr = Object.entries(obj) ;
//     console.log(arr);
    
// Write a program to find the second largest number in an array.
    let arr = [10, 5, 8, 20, 15] ;

    let second = [...new Set(arr)].sort( (a, b) => b - a)[1] ;
    console.log(second);
    