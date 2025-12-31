// Check if the string contains only alphabets.


function checkAplha(str){

    for( let i = 0 ; i < str.length ; i++){

        let code = str.charCodeAt(i)
        if(code >= 48 && code <= 57) return false ;
    }
    return true ;
}

if(checkAplha("Rohit Sisodiya")) console.log("Only Alphabet Present");
else console.log("Not Only Alphabet Present");