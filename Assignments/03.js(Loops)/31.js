// 35. Find HCF of two numbers.
    let num1 = 54 ;
    let num2 = 63 ;
    while( num1 % num2){

        let c = num1 % num2 ;
        num1 = num2 ;
        num2 = c ;
    }
    console.log(num2);
    