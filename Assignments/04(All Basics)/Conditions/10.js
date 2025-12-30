// Check if a number is palindrome.

let num = 12345654321 ;
let temp = num ;
let rev = 0 ;
while(num){

    rev = rev * 10 + (num%10)
    num = parseInt(num / 10)
}
if( temp == rev) console.log("Number is Pallindrome");
else console.log("Number is Not Pallindrome");
