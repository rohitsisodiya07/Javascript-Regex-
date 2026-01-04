// Write a function to find the smallest digit in a number.

function getSmallest(num) {
  let min = 9;
  while (num) {
    let last = num % 10;
    if (min > last) min = last;
    num = parseInt(num / 10);
  }
  return min;
}
console.log(getSmallest(99887756));
