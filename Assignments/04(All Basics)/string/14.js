// Check if the string contains only digits.

function checkDigit(str){

    for( let i = 0 ; i < str.length ; i++){

        let code = str.charCodeAt(i)
        if(code >= 48 && code <= 57) return true ;
    }
    return false ;
}

if(checkDigit("Rohit456")) console.log("Number Present");
else console.log("Number Not Present");

