let purchaseAmount = 15000 ;
let discount = 0 ;
if( purchaseAmount >= 10000) discount = (purchaseAmount * 25) / 100 ;
else if( purchaseAmount >= 5000 ) discount = (purchaseAmount * 15) / 100 ;
else if ( purchaseAmount >= 2000 ) discount = (purchaseAmount * 10) / 100 ; 

console.log("Total Amount After Discount = ",purchaseAmount - discount);

