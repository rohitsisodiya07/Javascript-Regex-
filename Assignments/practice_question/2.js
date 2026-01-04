// 2. Write a function to count the number of digits in a number.

function countDigit(num) {
  let count = 0;
  while (num) {
    count++;
    num = parseInt(num / 10);
  }
  return count;
}

console.log(countDigit(787782596774));
