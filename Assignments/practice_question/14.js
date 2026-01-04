//14. Write a function to find the maximum occurring digit in a number.

function maxOccur(num) {
  let count = Array(10).fill(0);
  while (num) {
    let last = num % 10;
    count[last]++;
    num = parseInt(num / 10);
  }
  let max = 0;
  let digit = -1;
  for (let i = 0; i < 10; i++) {
    if (count[i] > max) {
      max = count[i];
      digit = i;
    }
  }
  console.log("Maximum Digit Occur = ", digit);
  console.log("Occurence = ", max);
}

maxOccur(112232333335478);
