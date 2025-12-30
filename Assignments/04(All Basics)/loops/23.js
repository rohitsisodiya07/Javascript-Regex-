// Print numbers from 1–100, but replace:
// ● multiples of 3 → “Fizz”
// ● multiples of 5 → "Buzz"
// ● multiples of both → "FizzBuzz"


for( let i = 1 ; i <= 100 ; i++ ){

    if( i % 3 == 0){
        if( i % 5 == 0) console.log("FizzBuzz");
        else console.log("Fizz");        
    }
    else if( i % 5 == 0) console.log("Buzz");
    else console.log(i);
      
}