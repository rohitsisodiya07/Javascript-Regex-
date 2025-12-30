// 56. Print factorial of a number.


function factorialnum(num) {
    fact = 1 ;
    while(num){

        fact = fact * num ;
        num-- ;
    }
    return fact ;
}
console.log( factorialnum(10));
