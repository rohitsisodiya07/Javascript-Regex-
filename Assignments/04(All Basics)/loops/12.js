// Find the power of a number (a^b) using a loop.

function powernum(num, power) {
    
    let ans = 1 ;
    for( let i = 0 ; i <= power ; i++){

            ans = ans * num ;        
    }
    return ans ;
}



console.log(powernum(5, 4));
  