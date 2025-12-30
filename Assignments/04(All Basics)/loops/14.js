// Count even and odd digits in a number.function countnum(num) {
   

function countevenodd(num) {
    even = 0, odd =0 ;
    while(num){
            let last = num % 10 ;
            if( last % 2 == 0 ) even++ ;
            else odd++ ;
            num = parseInt( num /10)
    }
    console.log("Even = ",even);
    console.log("Odd = ",odd);
    
}
countevenodd(222555)