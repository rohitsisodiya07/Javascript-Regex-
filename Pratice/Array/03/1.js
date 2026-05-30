// Array me second largest number find karo

// const arr = [12, 35, 1, 10, 34, 1] ;
// const second = [...new Set(arr)].sort( (a, b) => b-a)[1] ;
// console.log(second);

// Array me missing number find karo.

// const arr = [1, 2, 3, 5, 6];

// function findMissing(arr) {
//   let n = arr.length + 1;
//   let sum = (n * (n + 1)) / 2;
//   let getSum = arr.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
//   let ans = sum - getSum;
//   console.log(ans);
// }

// findMissing(arr);

// Array me sabse zyada baar aane wala element (frequency wise) find karo.

// const arr = [1, 2, 2, 3, 3, 3, 4, 4];

// function mostFrequent(arr) {
//   let obj = arr.reduce((acc, curr) => {
//     if (acc[curr]) acc[curr]++;
//     else acc[curr] = 1;
//     return acc;
//   }, {});
//   // console.log(obj);
//   let maximum = -1;
//   let value = -1;
//   for (let val in obj) {
//     if (obj[val] > maximum) {
//       maximum = obj[val];
//       value = val;
//     }
//   }
//   console.log(value);
// }

// mostFrequent(arr);

// Array ko rotate karo 1 step right.

// const arr = [1, 2, 3, 4, 5];
// function rotateRight(arr) {

//     let n = arr.length - 1 ;
//     let last = arr[n] ;
//     let another = arr.slice(0, n) ;
//     let ans = [last, ...another]
//     console.log(ans);

// }
// function rotateRight(arr) {
//   arr.unshift(arr.pop());

//   console.log(arr);
// }

// rotateRight(arr);

// Array me first non-repeating element find karo.

const arr = [4, 5, 1, 2, 1, 2, 4];
function firstNonRepeating(arr) {
  let obj = arr.reduce((acc, curr) => {
    if (acc[curr]) acc[curr]++;
    else acc[curr] = 1;
    return acc;
  }, {});
  // console.log(obj);
  let ans = -1;
  for (let val of arr) {
    if (obj[val] == 1) {
      ans = val;
      break;
    }
  }
  console.log(ans);
}
firstNonRepeating(arr);
