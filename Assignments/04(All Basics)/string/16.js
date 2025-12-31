// Capitalize the first letter of the string.

function capitalFirst(str){

    res = "" ;
    for( let i = 0 ; i < str.length ; i++){

        if( i == 0 ) res += str[i].toUpperCase() ;
        else res += str[i] ;
    }
    console.log(res);   
}
capitalFirst("rohit") ;