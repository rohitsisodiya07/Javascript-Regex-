// Convert entire string to lowercase without using .toLowerCase()

    let str = "ROHIT" ;
    let res = "" ;
    for( let i = 0 ; i < str.length ; i++){

            let code = str[i].charCodeAt(0) ;
            if( code >= 65 && code <= 90){

                    code += 32 ;
                    
            }
            res += String.fromCharCode(code) ;
    }
    console.log(res);
    