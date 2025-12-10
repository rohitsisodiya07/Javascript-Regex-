// 21. Count consonants in a string.

let str = "Rohit" ;
    let count = 0 ;
    for( let i = 0 ; i < str.length ; i++){
        
        if( str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') ;
        else count++ ;
    }
    console.log(count);