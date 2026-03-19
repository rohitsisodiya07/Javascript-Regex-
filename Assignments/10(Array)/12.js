// 12. Find union of two arrays.

    let arr = [1, 2, 3, 4] ;
    let arr2 = [3, 4, 5, 6] ;

    let result1 = arr.filter( res => (!(arr2.includes(res))) ) ;
    let result2 = arr2.filter( res => (!(arr.includes(res))) ) ;

    let union = [...result1, ...result2] ;
    console.log(union);
    
    