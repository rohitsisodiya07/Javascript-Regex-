//19. Write a function to replace all spaces in a string with hyphens (-).


function removeSpace(str){
    count = 0 ;
    temp = "" ;
    for( let i = 0 ; i < str.length ; i++){

        if( str[i] == ' '){
            temp += "-"
        }
        else temp += str[i];
    }
    return temp ;
}
console.log(removeSpace("I am Working as a Mentor in Regex Software Services"))