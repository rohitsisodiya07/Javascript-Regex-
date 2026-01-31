// Check if at least one number in an array is negative.

let arr = [20, 10, 11, -11, 3, 4];
let check = arr.some((num) => num < 0);

if (check) {
  console.log("Yes Present");
} else console.log("Not Present");
