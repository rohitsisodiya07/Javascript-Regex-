// Check if a number is divisible by 3 and 5.

let num = 34464415 ;
if( num % 3 == 0){
    if( num % 5 == 0) console.log("Number is Divisible By 3 amd 5");
    else console.log("Number is Only Divisible by 3");
}
else if( num % 5 == 0) console.log("Number is Only Divisible by 5");
else console.log("Number is Not Divisible by 3 and 5");

