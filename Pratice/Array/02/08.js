// Check Uppercase or LowerCase.

function cheAlpha(char){

    let code = char.charCodeAt() ;
    if( code >= 65 && code <= 90){

            return "UpperCase" ;
    }
    else return "LowerCase"
}

console.log(cheAlpha('A'))