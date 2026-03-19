// 21. Find common elements of arrays

    let arr = [1, 2, 3, 4] ;
    let arr2 = [3, 4, 5, 6] ;

    let result = arr.filter( res => arr2.includes(res)) ;

    console.log(result);