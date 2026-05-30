//Count Vowels

function countVowels(str){

        let count = 0  ;
        let vowels = "aeiouAEIOU" ;
        for( let ch of str){

                if(vowels.includes(ch)) count++ ;
        }
        return count ;
}


let str = "Rohit" ;
console.log(countVowels(str)) ;