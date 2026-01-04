// Write a function to count the number of words in a string.

function countWord(str){
    count = 0 ;
    temp = "" ;
    for( let i = 0 ; i < str.length ; i++){

        if( str[i] == ' '){
            count++ ;
            temp = "" ;
        }
        else temp += str[i];
    }
    count++ ;
    return count ;
}
console.log(countWord("I am Working as a Mentor in Regex Software Services"))