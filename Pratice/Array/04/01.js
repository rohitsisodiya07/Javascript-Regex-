// Question 1 — Find the Largest Number in an Array

// const arr = [10, 45, 2, 89, 34, 67];

// let largest = -Infinity;

// for (let ch of arr) {
//     if (largest < ch) {
//         largest = ch;
//     }
// }

// console.log(largest);

//*************************************************** */
// Question 2 — Find the Second Largest Number

// const arr = [10, 45, 2, 89, 34, 67];

// let largest = -Infinity;
// let second = -Infinity;

// for (let ch of arr) {

//     if (largest < ch) {
//         second = largest;
//         largest = ch;
//     }
//     else if (largest > ch && ch > second) {
//         second = ch;
//     }
// }
// console.log(second);

//********************************* */
// Question 3 — Remove Duplicates from an Array
// const arr = [1, 2, 2, 3, 4, 4, 5];

// let result = []

// for (let ch of arr) {
//     if (!result.includes(ch)) {
//         result.push(ch)
//     }
// }
// console.log(result);

//******************************************** */
// Question 4 — Find the Smallest Number
// const arr = [10, 45, 2, 89, 34, 67];

// let small = Infinity;

// for (let ch of arr) {
//     if (small > ch) {
//         small = ch;
//     }
// }
// console.log(small);

//**************************************** */
// Question 5 — Count Even and Odd Numbers
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

let even = 0;
let odd = 0;

for (let ch of arr) {
    if (ch % 2 == 0) {
        even++;
    }
    else {
        odd++;
    }
}
console.log(even, odd);
