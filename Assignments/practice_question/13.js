//13. Write a function to find the second largest digit in a number.

function secondLargest(num) {
  let max = 0,
    second = -1;
  while (num) {
    let last = num % 10;
    if (last > max) {
      second = max;
      max = last;
    } else if (max > last && last > second) {
      second = last;
    }
    num = parseInt(num / 10);
  }
  console.log("Second Largest Digit = ", second);
}

secondLargest(789635);
