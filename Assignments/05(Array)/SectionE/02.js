// 32. Why does sort() behave unexpectedly with numbers?

// JavaScript’s sort() treats elements as strings by default, so numbers must be sorted using a custom compare function.

    let arr = [10, 20, 6, 4, 2] ;
    arr.sort() ;
    console.log(arr);
    