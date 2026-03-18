// 26. Check if string contains only digits


    let str = "787782596" ;
    for( let val of str){

        if( !(val >= 0 && val <= 9) ) {
            console.log("Only Digits Not Contain");
            return 0 ;  
        }
    }
    console.log("Only Digits Contain");
    