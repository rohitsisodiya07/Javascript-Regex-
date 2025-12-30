// Print prime numbers between 1–100.


for(let i = 2 ; i <= 100 ; i++){

    let temp = 0 ;
    for( let j = 2 ; j < i ; j++){

        if( i % j == 0){
            temp = 1 ;
          break ;
        }
    }
    if(!temp) console.log(i);
}