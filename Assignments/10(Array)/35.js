// 35. Find maximum difference

    let arr = [2,5,1,7,3] ;

    arr.sort( (a, b) => a - b) ;

    console.log(arr[arr.length-1] - arr[0]);
    