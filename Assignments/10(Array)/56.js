// 56. Merge arrays without duplicates

    let arr = [1,2,3] ;
    let arr2 = [3,4,5] ;


    let newArr = [...arr, ...arr2] ;

    let result = [...new Set(newArr)] ;

    console.log(result);
    