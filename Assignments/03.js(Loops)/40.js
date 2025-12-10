// 40. Find LCM of two numbers.

    let num1 = 24 ;
    let num2 = 52 ;
    let lcm = 1 ;
    let i = 2 ;
    while( num1 > 1 || num2 > 1){

            if( num1 % i == 0 || num2 % i == 0){

                if( num1 % i == 0) num1 = Math.floor(num1 / i)
                if( num2 % i == 0) num2 = Math.floor(num2 / i)
                console.log(i);
                    
                lcm = lcm * i ;
            }
            else i++ ;
    } 
    console.log(lcm);
    