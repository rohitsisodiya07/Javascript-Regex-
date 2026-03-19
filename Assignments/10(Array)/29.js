// 29. Group numbers by even and odd.

    let arr = [1,2,3,4,5,6] ;

    let even = arr.filter( res => res % 2 == 0) ;
    let odd = arr.filter( res => res % 2 != 0) ;

    console.log(even, odd);
    