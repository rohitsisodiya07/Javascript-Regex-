// Print all divisors of a number..

function divisor(num) {
    
    let i = 1 ;
    while ( i <= num ){

        if( num % i == 0 ) console.log(i);
        i++ ;
    }
}


divisor(6)
  