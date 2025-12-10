// 37. Create an ATM PIN retry system.
    let pin = Number(prompt("Enter Your Pin = ")) ;
    let attempt = 3 ;
    for( let i = attempt ; i >= 1 ; i--){

            if( pin == 7274){ 
                console.log("Congratulation!!");
                break ;
            }
            else {
                    console.log("Invalid Pin");
                    console.log("Please Enter Correct Pin");
                    if( i - 1 > 0) console.log((i-1) + " Attempts Left");
                    else{
                        console.log("No Attempts Left!"); 
                        break ;  
                    }                                        
            }
            pin = Number(prompt("Enter Your Pin = ")) ;
    }