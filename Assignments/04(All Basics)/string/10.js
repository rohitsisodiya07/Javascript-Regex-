// Find the Last occurrence of a character.


function findOccur(str, char ){

    for( let i = str.length-1 ; i >= 0 ; i--){

        if( str[i] == char ) return i ;
    }
    return '0' ;
}

console.log(findOccur("Rohit Sisodiya", 'h'));

