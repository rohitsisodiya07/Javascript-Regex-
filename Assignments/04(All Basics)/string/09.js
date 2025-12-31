// Find the first occurrence of a character.


function findOccur(str, char ){

    for( let i = 0 ; i <= str.length ; i++){

        if( str[i] == char ) return i ;
    }
    return '0' ;
}

console.log(findOccur("Rohit Sisodiya", 'a'));

