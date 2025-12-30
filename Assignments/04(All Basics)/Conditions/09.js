// Check if a number is prime (no array).

let num = 1756 ;
let temp = true ;
for( let i = 2 ; i < num ; i++){

    if( num % i == 0 ) {
        temp = false ;
        break ;
    } 
}
if(temp) console.log("Number is Prime");
else console.log("Number is Not Prime");

