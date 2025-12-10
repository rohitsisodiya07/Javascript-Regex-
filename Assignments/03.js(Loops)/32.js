// 36. Simulate login attempt system using loop.

let username = prompt("Enter Your Username = ")
let password = Number(prompt("Enter Your Password = "))
let attempts = 5 ;
for( let i = attempts ; i >=1 ; i--){

    if( username == "Rohit07" && password == 7274){
        console.log("Congratulation!!! You are Sucessfully Login");
        break ;
    } 
    else
    {
        console.log("Invalid Input"); 

        if (i - 1 > 0) console.log((i - 1) + " Attempts Left");

        else console.log("No Attempts Left! Account Locked.");

    }
    username = prompt("Enter Your Username = ");
    password = Number(prompt("Enter Your Password = "));
}
    

