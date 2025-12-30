//Check if a number is palindrome using a loop.

function checkpalli(num) {
    rev = 0;
    temp = num ;
    while(num){

        rev = rev *10 + num % 10 ;
        num = parseInt( num /10)
    }
    if( temp == rev ) return true ;
    else return false ;
}
if(checkpalli(1234564321)) console.log(" Number is Pallindrome");
else console.log("Number is Not Pallindrome");

