// Chunk an array into smaller arrays of given size.

    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] ;
    let size = 4 ;

    let result = [] ;

    for( let i = 0 ; i < arr.length ; i += size){

            result.push(arr.slice(i, i+size))
    }
    console.log(result);
    