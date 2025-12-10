// Reverse a number using a loop.
    let num = 2549, rev = 0;
    while(num){
        let last = num % 10 ;
        rev = rev * 10 + last ;
        num = Math.floor(num/10) ;
    }
    console.log(rev);
    