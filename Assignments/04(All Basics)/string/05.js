// Count consonants in a string.


function checkConsonant(key, str){

    for( let i = 0 ; i < str.length ; i++){

        if( key == str[i]) return true ;
    }
    return false ;
}

function countConsonant(str){

    vowels = "aeiouAEIOU" ;
    count = 0 ;
    for( let i = 0 ; i < str.length ; i++){

        if(!checkConsonant(str[i], vowels)) count++ ;
    }
    return count ;
}
console.log(countConsonant("Rohit Sisodiya"))