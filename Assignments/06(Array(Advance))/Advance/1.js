// Find the second largest number in an array.

    let arr = [12, 14, 26, 23, 46, 62, 41, 77, 51] ;

    let newarr = arr.reduce( (acc, curr) => {

            if( curr > acc.max){
                acc.second = acc.max ; 
                acc.max = curr ;
            }
            else if ( acc.max > curr && acc.second < curr){
                acc.second = curr ;
            }
            return acc ;
    }, { max : -Infinity, second : -Infinity})
    console.log(newarr.max);
    console.log(newarr.second);
    