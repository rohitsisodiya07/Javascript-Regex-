// Remove duplicate characters.

function checkDuplicate(key, str){

    for( let i = 0 ; i < str.length ; i++){

        if( key == str[i]) return true ;
    }
    return false ;
}


function removeDuplicate(stri){

    res = "" ;
    for( let i = 0 ; i < stri.length ; i++){
        
        if(!checkDuplicate(stri[i], res)) res += stri[i] ;
    }
    console.log(res); 
}

removeDuplicate("Rohit Sisodiya") ;