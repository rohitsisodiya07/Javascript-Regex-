//Generate oynmaic otp using fxn ;

// function generateOtp(val) {
//   let otp = "";
//   for (let i = 0; i < val; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   console.log(otp);
// }

// generateOtp(4);

// Create a function that takes two numbers and returns the greater number.

// function getLarge(a, b) {
//   return Math.max(a, b);
// }

// console.log(getLarge(100, 15));

// Write code to remove duplicate values from an array.

// let arr = [1, 2, 2, 3, 4, 4] ;
// let answer = [...new Set(arr)] ;
// console.log(answer);

// Write code to reverse a string

// let str = "rohit" ;
// let rev = str.split("").reverse().join("") ;
// console.log(rev);

// Write code to count how many times each element appears in an array.

// let arr = [1, 2, 2, 3, 1];
// let obj = arr.reduce((acc, curr) => {
// if (acc[curr]) acc[curr]++;
// else acc[curr] = 1;
// return acc;
// }, {});

// console.log(obj);

//Create Promise

// let promise = new Promise((resolve, reject) => {
//   let ans = false;
//   if (ans) {
//     resolve("Data Resolve");
//   } else {
//     reject("Rejected");
//   }
// });
// promise.then((res) => console.log(res)).catch((err) => console.log(err));

//Make Callback

setTimeout(() => {
  console.log("step 1");

  setTimeout(() => {
    console.log("step 2");

    setTimeout(() => {}, 1000);
    console.log("step 3");
  }, 2000);
}, 3000);
