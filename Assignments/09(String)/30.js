// 30. Expand "a3b2" → "aaabb"

    let str = "a3b2c1d4" ;
    let result = "" ;
    for( let i = 0 ; i < str.length ; i++){

            let code = str[i].charCodeAt() ;
            if( code >= 97 && code <= 122){

                    result += str[i] ;
            }
            else{
                let res = str[i-1].repeat(Number(str[i])-1) ;
                result += res ;
            }    
    }
    console.log(result);
    
    