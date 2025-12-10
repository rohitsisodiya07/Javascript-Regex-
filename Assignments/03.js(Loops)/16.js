// 16. Count total digits in a number.
    let num = 787782596779855084, count = 0 ;
    while(num){
        count++;
        num = Math.floor(num/10) ;
    }
    console.log(count);
    