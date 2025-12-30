// Find the sum of squares 1 to n.

function squareSum(num){

    let i = 1 ;
    let sum = 0 ;
    while( i <= num){

        sum = sum + (i*i) ;
        i++ ;
    }
    return sum ;
}
console.log(squareSum(10));
