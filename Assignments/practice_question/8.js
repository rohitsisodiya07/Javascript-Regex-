// 8. Write a function to check whether a number is perfect.

//Perfect Number = Sum of all Divisors of Number Exclude Number.

function checkPerfect(num) {
  let temp = num,
    sum = 0;
  for (let i = 1; i * 2 <= num; i++) {
    if (num % i == 0) sum += i;
  }
  if (sum == temp) return true;
  else return false;
}

console.log(checkPerfect(6));
