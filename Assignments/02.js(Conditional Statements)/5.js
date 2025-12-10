let paymentMethod = "UPI" ;
let payment = 1000  ;

if( paymentMethod == "UPI"){

        if( payment >= 1 && payment <= 100000) console.log("Payment Successfully Done");
        else console.log("Plaese Enter Valid Amount");        
}
else if( paymentMethod == "CARD"){

    if( payment >= 100 ) console.log("Payment Accepted");
    else console.log("Minimum Balance is 100");   
}

else if( paymentMethod == "WALLET"){
    let amount  = 10000;

    if( amount > payment ) console.log("Payment Accepted");
    else console.log("Balance is Less Than Payment");   
}
else console.log("Invalid Method");
