// 23. Check whether a number is Armstrong.
    let num = 153 ;
    let temp = num ;
    let check = 0 ;
    while(num){
        let last = num % 10 ;
        check = last * last * last + check;
        num = Math.floor(num/10) ;      
    }
    if( check == temp ) console.log("ArmStrong Number");
    else console.log("Not ArmStrong Number");
    
    