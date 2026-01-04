// Write a function to find the factorial of a number.

function getFactorial(num) {
  let fact = 1;
  while (num) {
    fact = fact * num;
    num--;
  }
  return fact;
}

console.log(getFactorial(10));
