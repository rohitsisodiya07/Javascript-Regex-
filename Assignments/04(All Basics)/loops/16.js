// Find GCD of two numbers.

function getGCD(num1, num2) {
    
    let c ;
    if( num1 > num2){

        let temp = num1 ;
        num1 = num2 ;
        num2 = temp ;
    }

    while( num1 % num2){

        c = num1 % num2 ;
        num1 = num2 ;
        num2 = c ;
    }
    return c ;
}

console.log(getGCD(2400, 10542));
