// 22. Print Fibonacci series up to n terms.

    let n = 20 ;
    let a = 0, b = 1, c ;
    for( let i = 2 ; i <= n ; i++){

        c = a + b ;
        console.log(c);
        a = b ;
        b = c ;
    }
    