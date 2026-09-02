//1. Reverse a string

// const str = 'JavaScript';

// let rev = "";
// let length = str.length - 1;
// for (let i = length; i >= 0; i--) {
//     rev += str[i];
// }
// console.log(">>>>>", rev);


// const rev = str.split("").reverse().join("") ;
// console.log(">>>>>", rev);


///////////////////////////////////////////////////////////

//2. Check whether a string is a palindrome or not.

// const str = "maadaam";

// let i = 0;
// let j = str.length - 1;

// while (i < j) {
//     if (str[i] !== str[j]) {
//         console.log("Not Pllindrome!!");
//         return;
//     }
//     i++;
//     j--;
// }
// console.log("Pallindrome");

// let rev = str.split("").reverse().join("");
// if (rev === str) console.log(">>>>Pallindrome");
// else console.log(">>>>>>>>Not Pallindrome");


///////////////////////////////////////////////////////////

//3. Count the number of vowels in a string.
// const str = "javascript";

// const vowels = 'aeiouAEIOU';
// let count = 0;

// for (let ch of str) {
//     if (vowels.includes(ch)) {
//         count++;
//     }
// }
// console.log(">>>>>Total Vowels = ", count);


///////////////////////////////////////////////

// 4.Count the frequency of each character in a string.
// const str = "javascript";
// let obj = {};
// for (let ch of str) {
//     if (obj[ch]) {
//         obj[ch]++;
//     }
//     else {
//         obj[ch] = 1;
//     }
// }
// console.log(obj);

// const map = new Map();

// for (let ch of str) {
//     map.set(ch, (map.get(ch) || 0) + 1);
// }

//**************************************************** */

//5.Find the first non-repeating character in a string.
// const str = "aabbcde";
// let obj = {};
// for (let ch of str) {
//     if (obj[ch]) {
//         obj[ch]++;
//     }
//     else {
//         obj[ch] = 1;
//     }
// }
// for (let ch of str) {
//     if (obj[ch] === 1) {
//         console.log(ch);
//         return;

//     }
// }



//********************************************* */
//6. First Repeating Character