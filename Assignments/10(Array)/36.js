// 36. Find minimum difference

    let arr = [4, 9, 1, 32, 13] ;
    let result ;
    let mini = Infinity ;

    arr.sort( (a, b) => a - b) ;

    for( let i = 1 ; i < arr.length ; i++){

            result = arr[i] - arr[i-1] ;
            mini = Math.min(result, mini) ;
    }
    console.log(mini);
    