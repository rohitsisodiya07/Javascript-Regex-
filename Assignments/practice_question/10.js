//10. Write a function to find the GCD of two numbers.

function getGCD(num1, num2) {
  let c;
  while (num1 % num2) {
    c = num1 % num2;
    num1 = num2;
    num2 = c;
  }
  console.log("G.C.D = ", c);
}
getGCD(12, 24);
