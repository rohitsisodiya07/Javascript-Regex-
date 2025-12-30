// Find the sum of digits of a number.

function sumdigits(num) {
    sum = 0 ;
    while(num){

        sum += num % 10 ;
        num = parseInt( num /10)
    }
    return sum ;
}
console.log( sumdigits(10554));
