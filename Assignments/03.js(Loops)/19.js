// 19. Print all prime numbers from 1 to 100.

    let num = 646 ;
    for( let i = 2 ; i <= 100 ; i++){

        let flag = 1;
        for( let j = 2 ; j < i ; j++){

        if( i % j == 0){
            flag = 0 ;
            break ;
            }
        }
        if(flag) console.log(i);
    }