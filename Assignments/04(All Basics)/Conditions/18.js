// Check if the string ends with a consonant.


function linearsearch(key, str) {
    for (let i = 0; i < str.length; i++) {
        if (key === str[i]) {
            return true;
        }
    }
    return false;
}
let string = "RohitSisodiya" ;
let vowels = "aeiouAEIOU" ;
let last = string.length - 1 ;


        if(linearsearch(string[last], vowels)) console.log("Not Consonant");
        else console.log("Consonant");