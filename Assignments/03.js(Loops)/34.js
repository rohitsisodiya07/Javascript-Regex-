// 38. Generate 6 digit OTP using loop.

let pin = Number(prompt("Please Enter Six Digit Pin"))
let count, num ;
    for(let i = 0 ; ; i++){
        count = 0 ;
        num = pin ;
        while(num){
            count++ ;
            num = Math.floor(num/10) ;
        }
        if( count == 6){
            console.log("Congratulation! Pin is Sccessfully Created");
            break ;     
        }
        else{
            console.log("Pin Denied");    
        }
        pin = Number(prompt("Please Enter Six Digit Pin"))
    }