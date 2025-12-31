// Convert lowercase to uppercase (manual logic).

function lowerUpper(str) {
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        if (code >= 97 && code <= 122) {
            temp += String.fromCharCode(code - 32);
        } else {
            temp += str[i];
        }
    }

    console.log(temp);
}

lowerUpper("rohit sisodiya");
