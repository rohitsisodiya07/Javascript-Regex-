// Convert uppercase to lowercase.


function UpperLower(str) {
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            temp += String.fromCharCode(code + 32);
        } else {
            temp += str[i];
        }
    }

    console.log(temp);
}

UpperLower("ROHIT SISODIYA");