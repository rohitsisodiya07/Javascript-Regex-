// 24. Print Armstrong numbers between 1 and 500.
    for( let i = 1 ; i <= 500 ; i++){
    let num = i ;
    let temp = num ;
    let check = 0 ;
    while(num){
        let last = num % 10 ;
        check = last * last * last + check;
        num = Math.floor(num/10) ;      
    }
    if( check == temp ) console.log(i);

    }