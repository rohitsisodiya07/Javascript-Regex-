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

// for (let ch of str) {

//     if (str.indexOf(ch) === str.lastIndexOf(ch)) {

//         console.log(ch);
//         return ;

//     }
// }




//********************************************* */
//6. First Repeating Character

// const str = "abbcddeda";
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
//     if (obj[ch] > 1) {
//         console.log(ch);
//         return;

//     }
// }

//********************************************** */
//7. Remove Duplicate Characters

// const str = "programming";
// let obj = {};
// let result = "";

// for (let ch of str) {
//     if (!obj[ch]) {
//         obj[ch] = true;
//         result += ch;
//     }
// }
// console.log(result);


//******************************************* */
//8. Find duplicate characters in a string.
// const str = "programming";

// let obj = {};
// let result = [];

// for (let ch of str) {
//     if (obj[ch]) {
//         obj[ch]++;
//     } else {
//         obj[ch] = 1;
//     }
// }

// for (let ch of str) {
//     if (obj[ch] > 1 && !result.includes(ch)) {
//         result.push(ch);
//     }
// }

// console.log(result);

//*************************************** */
//9. Check whether two strings are anagrams or not.

// const str1 = "listen";
// const str2 = "silent";

// let result1 = str1.split('').sort().join('')
// let result2 = str2.split('').sort().join('')
// // console.log(result1);
// // console.log(result2);

// if (result1 === result2) {
//     console.log("Anagram");
// }
// else {
//     console.log('Not Anagram');
// }


//******************************************************* */
//10. Anagram check karo WITHOUT using sort().
// const str1 = 'listen';
// const str2 = 'silent';

// if (str1.length !== str2.length) {
//     console.log("Not Anagram");
// }
// let obj = {};
// for (let ch of str1) {

//     if (obj[ch]) {
//         obj[ch]++;
//     }
//     else {
//         obj[ch] = 1;
//     }
// }
// for (let ch of str2) {

//     if (obj[ch]) {
//         obj[ch]--;
//     }
//     else {
//         console.log("Not Anagram");
//         return;
//     }
// }
// console.log("Anagram");

// console.log(obj);


//*********************************************** */
//11. Reverse Words
// const str = "I love JavaScript";

// const rev = str.split(" ").reverse().join(" ");
// console.log(rev);


//************************************************ */
//12. Reverse Every Word
// const str = "I love JavaScript";

// const reverseString = (ch) => {
//     let rev = ch.split("").reverse().join("");
//     return rev;
// }

// const arr = str.split(" ");
// let rev = '';
// for (let ch of arr) {

//     rev += reverseString(ch);
//     rev += ' ';
// }

// console.log(rev);


// const reverseString = (word) => {
//     return word.split("").reverse().join("");
// };

// const arr = str.split(" ");

// let result = [];

// for (let word of arr) {
//     result.push(reverseString(word));
// }

// console.log(result.join(" "));

//************************************************ */
// 13. Longest Word
// const str = "I am learning JavaScript";

// let longestWord = "";

// const arr = str.split(" ");

// for (let word of arr) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }

// console.log(longestWord);

//********************************************* */
// 14. Shortest Word 
// const str = "I am learning JavaScript";
// let shortestWord = "";
// let count = Infinity;

// const arr = str.split(" ");

// for (let word of arr) {
//     if (word.length < count) {
//         shortestWord = word
//         count = word.length;
//     }
// }

// console.log(shortestWord);

//*********************************************** */
//15. Count Words

// const str = "I   am   learning   JavaScript";

// const arr = str.trim().split(/\s+/);

// console.log(arr.length);

//************************************************* */
//16.Remove All Spaces
// const str = "hello world javascript";

// let result = '';
// for (let ch of str) {

//     if (ch !== ' ') {
//         result += ch;
//     }
// }
// console.log(result);

//************************************** */
// 17. Count Digits, Alphabets & Special Characters

// const str = "abc123@#";

// let digits = 0;
// let alphabet = 0;
// let special = 0;
// for (let ch of str) {

//     if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || ch === ' ') {
//         alphabet++;
//     }
//     else if (ch >= '0' && ch <= '9') {
//         digits++;
//     }
//     else {
//         special++;
//     }
// }
// console.log("Digits = ", digits);
// console.log("Aplhabets = ", alphabet);
// console.log("Special Character = ", special);


//*************************************************** */
//18.Remove Special Characters
// const str = "hello@world#123!";

// let result = '';

// for (let ch of str) {
//     if (((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))) {
//         result += ch;
//     }
// }
// console.log(result);

//*********************************** */
//19. Maximum Occurring Character
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

// let max = -Infinity ;
// let char ;
// for(let key in obj){

//     if(obj[key] >= max){
//         max = obj[key] ;
//         char = key ;
//     }
// }

// console.log(max);
// console.log(char);

//********************************** */
//20. String Compression
// const str = "aaabbcccc";

// let result = "";
// let count = 1;

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//         count++;
//     } else {
//         result += str[i] + count;
//         count = 1;
//     }
// }

// console.log(result);

//******************************* */
//21. Capitalize First Letter of Every Word
// const str = "hello world javascript";

// const convertUpper = (word) => {
//     return String.fromCharCode(word.charCodeAt(0) - 32) + word.slice(1);
// };

// let result = '';
// let word = '';

// for (let ch of str) {
//     if (ch !== ' ') {
//         word += ch;
//     } else {
//         result += convertUpper(word) + ' ';
//         word = '';
//     }
// }

// // Handle last word
// if (word) {
//     result += convertUpper(word);
// }

// console.log(result);

//*********************************************** */
//22. First Letter Uppercase

// const str = "javascript";

// let newString = String.fromCharCode(str[0].charCodeAt(0) - 32) + str.slice(1)
// console.log(newString);

//***************************************** */
//23. Remove Extra Spaces

// const str = "  hello    world   javascript  ";

// let result = "";
// let previousSpace = false;

// for (let ch of str) {
//     if (ch === " ") {
//         if (!previousSpace && result.length > 0) {
//             result += ch;
//         }
//         previousSpace = true;
//     } else {
//         result += ch;
//         previousSpace = false;
//     }
// }

// console.log(result);

//************************************************** */
//24. Check if String Contains Only Digits

// const str = "123456";

// for (let ch of str) {

//     if (!(ch >= '0' && ch <= '9')) {
//         console.log('false');
//         return;
//     }
// }
// console.log('true');

//************************************ */
//25. String Rotation

// const str1 = "abcde";
// const str2 = "cdeab";

// if (
//     str1.length === str2.length &&
//     (str1 + str1).includes(str2)
// ) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//*************************************** */
//26. Find All Substrings

const str = "abc";

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        console.log(str.slice(i, j));
    }
}