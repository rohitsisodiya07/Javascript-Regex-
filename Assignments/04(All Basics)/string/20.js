// Compare two strings without ===.


function checkStr(str1, str2){
    let length ;
    if( str1.length >= str2.length) length = str1.length ;
    else str2.length ;
    for( let i = 0 ; i < length ; i++){
    
        if(!(str1[i] == str2[i])) return false ;
    }
    return true ;
}

console.log(checkStr("Rohit", "Rohit"))