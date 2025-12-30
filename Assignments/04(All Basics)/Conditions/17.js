// Check if the string starts with a vowel.


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

        if(linearsearch(string[0], vowels)) console.log("Vowel");
        else console.log("Not Vowel");
        
        
