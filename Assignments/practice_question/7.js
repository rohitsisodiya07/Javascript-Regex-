// 7. Write a function to count even and odd digits in a number.

function countEvenOdd(num) {
  let even = 0,
    odd = 0;
  while (num) {
    if (num % 2 == 0) even++;
    else odd++;
    num = parseInt(num / 10);
  }
  console.log("Even Digit = ", even);
  console.log("Odd Digit = ", odd);
}

countEvenOdd(7412369852147);
