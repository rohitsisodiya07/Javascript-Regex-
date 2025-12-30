// Print Fibonacci series up to n terms.


function fibonacci(num) {
    let a = 0, b = 1, c ;
    console.log(a);
    console.log(b);

    for (let i = 2; i < num; i++){
        
        c = a + b ;
        console.log(c);
        a = b ;
        b = c ;
    }
    
}
fibonacci(5)