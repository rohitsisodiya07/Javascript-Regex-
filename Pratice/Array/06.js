// Longest SubString Without Repeating Character.

    let str = "RoihitSisodiya" ;
    let res = "" ;
    let ans = "" ;
    let large = 0 ;


    for( let i = 0 ; i < str.length ; i++){

            if(res.includes(str[i])){

                if( res.length > large){
                    large = res.length ;
                    ans = res ;
                    res = "" ;
                }

            }else{
                res += str[i] ;
            }  
    }
    console.log(large);
    console.log(ans);
    