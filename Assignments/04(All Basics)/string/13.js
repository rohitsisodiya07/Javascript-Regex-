// Replace all vowels with *.

function checkVowels(key, str){

    for( let i = 0 ; i < str.length ; i++){

        if( key == str[i]) return true ;
    }
    return false ;
}

function countVowels(str){

    vowels = "aeiouAEIOU" ;
    res = ""
    for( let i = 0 ; i < str.length ; i++){

        if(checkVowels(str[i], vowels)) res += "*";
        else res += str[i] ;
    }
    return res ;
}

console.log(countVowels("Rohit Sisodiya"))