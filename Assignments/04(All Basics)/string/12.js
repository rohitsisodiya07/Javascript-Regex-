// Remove spaces from a string.


function removeSpace(str){

        res = "" ;
        for( let i = 0 ; i < str.length ; i++){

            let code = str.charCodeAt(i) ;
            if( !(code == 32)) res += str[i];
        }
        console.log(res);
        
}

removeSpace("R o h i t S i s o d i y a ")