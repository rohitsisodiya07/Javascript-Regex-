// 25. Count occurrences of values in an array using an object.

    let arr = [2, 4, 2, 4, 6, 6, 8, 8, 9, 7, 10, 1] ;
    let obj = arr.reduce( (acc, curr) => {

            if( acc[curr] > 0 ){
                acc[curr] += 1 ;
            }
            else acc[curr] = 1 ;
            return acc ;

    }, {})
    console.log(obj);
    