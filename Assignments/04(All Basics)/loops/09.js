// Count digits in a number.

function countnum(num) {
    count = 0;
    while(num){
            count++ ;
            num = parseInt( num /10)
    }
    return count ;
}
console.log( countnum(10554));
