//1.

// function reverseString(str) {
//   let rev = str.split("").reverse().join("");
//   return rev;
// }
// console.log(reverseString("hello"));

//2.

// let arr = [10, 15, 20, 14, 30, 20];
// function largest(arr) {
//   let maximum = [...new Set(arr)].sort((a, b) => b - a)[0];
//   return maximum;
// }
// console.log(largest(arr));

//3.
// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let ch of str) {
//     if (vowels.includes(ch)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hello"));

//4.
// let arr = [5, 10, 20, 30, 35];
// function arraySum(arr) {
//   let sum = arr.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   return sum;
// }
// console.log(arraySum(arr));

//5.
// let arr = [5, 5, 10, 15, 10, 15, 20, 30] ;
// function getUnique(arr){

//     let unique = [...new Set(arr)] ;
//     return unique ;
// }
// console.log(getUnique(arr));

//6.
// let str = "My Name is Rohit Sisodiya";
// function longestWord(str) {
//   let long = str.trim().split(" ");
//   let maximum = long.reduce((acc, curr) => {
//     if (curr.length > acc.length) return curr;
//     else return acc;
//   });
//   return maximum;
// }
// console.log(longestWord(str));

//7.

// let str = "Rohit Sisodiya" ;
// function countFrequency(str){

//     let arr = str.split("") ;
//     let obj = arr.reduce( (acc, curr) => {

//             if(acc[curr]){
//                 acc[curr]++ ;
//             }
//             else{
//                 acc[curr] = 1 ;
//             }
//             return acc ;
//     }, {})
//     return obj ;
// }
// console.log(countFrequency(str));

//8.

// function randomInteger(min, max) {
//   let num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num ;
// }
// console.log(randomInteger(1, 10));

//9.
// let arr = [1, 2, 2, 3, 4, 4];
// function getDuplicate(arr) {
//   let duplicate = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index;
//   });
//   let sort = [...new Set(duplicate)];
//   return sort;
// }
// console.log(getDuplicate(arr));

//10.
// let str = "Rohit Sisodiya" ;
// function reverseWord(str){
//     let rev = str.split(" ").reverse().join(" ") ;
//     return rev ;
// }
// console.log(reverseWord(str));

// 11.

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects({ a: 1 }, { a: 2, b: 3 }));



//
// 1. answer is 6 - because in array there are three values and in map we push there multiplies so answer is 6

// 3. answer is 3 - beacuse we use setInterval which runs on every sec so, when count become 3 after it interval is clear so, we get output as 3.

//4.answer is  [6, 8] - because after map there value is double so only 3 and 4 whose double is 6, 8 is greater then 5.

//5. answer is 2 - because firstlt sync code run so x value is 2 then in log we get 2.

//6. answer is [3, 4] - because after map there value is increase by one so 2, 3 became 3, 4 which is greater than 2.

///7. answer is 1, 2 - because increment has count value so it became 1 and 2

//8. answer is 10 - beacuse reduce gives single value and we do sum .

//10. answer is 12- because map double the values of array and reduce do sum of them .

//11. answer is 1 - same as ques no . 5.

//12. answer is 4 - there are only even no after filter and in map we multipy it by 2 ;

//13. [1, 2, 3] - print after gap of 1 sec ;

//14. inside callback because return function come inside func.

//15. 10 - because a become 15 but already 10 prints