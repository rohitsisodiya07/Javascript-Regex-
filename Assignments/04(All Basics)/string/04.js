// Count vowels in a string.

function checkVowels(key, str){

    for( let i = 0 ; i < str.length ; i++){

        if( key == str[i]) return true ;
    }
    return false ;
}

function countVowels(str){

    vowels = "aeiouAEIOU" ;
    count = 0 ;
    for( let i = 0 ; i < str.length ; i++){

        if(checkVowels(str[i], vowels)) count++ ;
    }
    return count ;
}

console.log(countVowels("Rohit Sisodiya"))