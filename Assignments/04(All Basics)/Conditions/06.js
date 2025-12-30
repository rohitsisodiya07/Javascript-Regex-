// Check if a character is a vowel or consonant.

function checkvowels(key, str){
        for( let i = 0 ; i < str.length ; i++){
            if( str[i] == key) return true ;
        }
        return false ;
}

let ch = 'A' ;
let str = "aeiouAEIOU"
if(checkvowels(ch, str)) console.log("Character is Vowels");
else console.log("Character is Consonant");

