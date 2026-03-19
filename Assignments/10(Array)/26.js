// 26. Check if array is sorted


    let arr = [1,2,3,4,5] ;

    for( let i = 1 ; i < arr.length ; i++){

            if( arr[i] < arr[i-1]){
                console.log("Array is Not Sorted");
                return 0 ;
            }
    }
    console.log("Array is Sorted");
    