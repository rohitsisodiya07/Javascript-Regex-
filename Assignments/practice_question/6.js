// 6. Write a function to find the largest digit in a number.

function getLargest(num) {
  let max = 0;
  while (num) {
    let last = num % 10;
    if (last > max) max = last;
    num = parseInt(num / 10);
  }
  return max;
}
console.log(getLargest(887756));
