// Check if a number is a perfect square.

let num = 101 ;
let temp = false ;
for(let i = 1 ; i*i <= num ; i++){

    if( i*i == num ){
        temp = true ;
        break ;
    }  
}
if(temp) console.log("Perfect Sqaure");
else console.log("Not Perfect Sqaure");
