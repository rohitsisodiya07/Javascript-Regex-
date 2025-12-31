// Check if the string is palindrome.
function checkpallindrome(str){

    let i = 0 ;
    let j = str.length-1 ;
    while( i < j){
    
        if( !(str[i] == str[j]) ) return false ;
        i++ ;
        j-- ;
    }
    return true ;
}


if(checkpallindrome("MadaM")) console.log("Pallindrome");
else console.log("Not Pallindrome");


