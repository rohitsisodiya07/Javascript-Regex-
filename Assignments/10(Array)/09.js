// 9. Count odd numbers

    let arr = [1,2,3,4,5,6,7,8] ;
    let odd = 0 ;
    arr.forEach( res => {

            if( res % 2 !== 0) odd++;
    })
    console.log(odd);