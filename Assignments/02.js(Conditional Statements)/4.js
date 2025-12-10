let userName = "Rohit" ;
let password = 7877 ;

for( let i = 5 ; i >= 1 ; i-- ){

        if( userName == "Rohit" && password == 78778 ){

            console.log("You are Successgully Login!!!");
            break ;
        }
        else{
            console.log("Invalid Details !!");
            console.log("Please Enter Correct Details");
            
            console.log("You Have "+ i + " Attempts Left");
            
        }
        
}