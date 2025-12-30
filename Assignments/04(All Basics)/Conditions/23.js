// Check if a number is a strong number.
let sum = 0 ;


function factorial(num) {

        let fact = 1 ;
        while(num){
            fact = fact * num ;
            num-- ;
        }
        return fact ;
}
function getsum(num) {
    
        while(num){
        let last = num % 10 ;
        let lastsum = factorial(last) ;
        sum += lastsum ;
        num = parseInt(num/10)
        }
        return sum ;
}


let num = 405854 ;
let ans = getsum(num) ;
if( num == ans) console.log("Strong number");
else console.log("Not Strong Number");

