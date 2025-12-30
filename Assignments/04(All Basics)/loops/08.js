// Reverse a number using a loop.

function reversenum(num) {
    rev = 0;
    while(num){

        rev = rev *10 + num % 10 ;
        num = parseInt( num /10)
    }
    return rev ;
}
console.log( reversenum(10554));
