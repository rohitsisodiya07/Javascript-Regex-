//1. Without using any built-in method (reverse(), split(), etc.), reverse a string.

// function reverseString(str) {
//     let result = "";

//     for (let i = str.length - 1; i >= 0; i--) {

//         result += str[i];
//     }
//     return result;
// }

// console.log(reverseString("Rohit"));


//2. Without using any built-in method (reverse(), join(), split()), check whether a string is a palindrome.

// function isPalindrome(str) {

//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {

//         if (str[i] != str[j]) {

//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// console.log(isPalindrome("madam"));


//3. Without using any built-in method (sort(), Math.max()), find the largest number in an array.

function findLargest(arr) {

    if (arr.length === 0) {
        return "Array is empty";
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > largest) {
            largest = arr[i];
        }

    }

    return largest;
}

let arr = [10, 50, 30, 40];
console.log(findLargest(arr));


