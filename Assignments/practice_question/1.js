// 1. Write a function to check whether a number is a palindrome.

function checkpallindrome(num) {
  let temp = num;
  let rev = 0;
  while (num) {
    rev = rev * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  if (temp == rev) return true;
  else return false;
}

console.log(checkpallindrome(12321));
