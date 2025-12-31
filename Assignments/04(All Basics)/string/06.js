// Count spaces in a string.


function countSpace(str){

    count =0 ;
    for( let i = 0 ; i < str.length ; i++){

        if( str[i] == ' ' ) count++ ;
    }
    return count ;
}
console.log(countSpace("Ro h it Sisodiya"))