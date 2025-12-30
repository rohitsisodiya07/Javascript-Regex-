// Print sum of first n natural numbers.


function sumNatural(n){

    sum = 0 ;
    while(n){

        sum += n ;
        n-- ;
    }
    return sum ;
}
console.log(sumNatural(1000));