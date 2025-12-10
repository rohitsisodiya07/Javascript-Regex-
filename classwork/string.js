//String -Methods
let name = "Rohit Sisodiya";
let surname = "Intern"
// console.log(name);

// console.log(name.length);
// console.log(name.charAt(2));
// console.log(name.at(4));
 
console.log(name.concat(surname));
// console.log(name.trim());
// console.log(name.trimStart());
// console.log(name.trimEnd());
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(name.slice(1,3)); // Not Include Last Character
// console.log(name.substring(1,3)); // Not Include Last Character
// console.log(name.substr(1, 3)); // Include Last Character // Not as Much used

// console.log(name.replace("Sisodiya", "Sharma") )
// console.log(name.replaceAll("o", "a") )

let check = "rohit"
// console.log(check.split(""));


for( let i = check.length-1 ; i >= 0 ; i--){
    if( i == 0){
        console.log(check[i].toUpperCase());    
    }
    else console.log(check[i]);  
}

let capital = check.charAt(0).toUpperCase() + check.slice(1) ;
console.log(capital);
