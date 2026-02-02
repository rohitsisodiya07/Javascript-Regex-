//4. Given an array of numbers, check whether the array is sorted in ascending order.

    let arr = [ 2, 4, 6, 8, 9, 5, 10 ] ;
    let isSorted = true ;

    for( let i = 0 ; i < arr.length ; i++){

            if( arr[i] > arr[i+1] ){
                isSorted = false ;
                break ;
            }
    }
    console.log (isSorted ? "Sorted" : "Not Sorted")
    