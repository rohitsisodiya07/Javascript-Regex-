// 18. Check whether a number is prime.
    let num = 5, flag = 1;
    for( let i = 2 ; i < num ; i++){

        if( num % i == 0){
            flag = 0 ;
            break ;
        }
    }
    if(flag) console.log("Prime Number");
    else console.log("Not Prime Number");
    
    