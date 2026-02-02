// Find the second largest number in an array.

    let arr = [12, 14, 26, 23, 46, 62, 41, 77, 51] ;

    // let newarr = arr.reduce( (acc, curr) => {

    //         if( curr > acc.max){
    //             acc.second = acc.max ; 
    //             acc.max = curr ;
    //         }
    //         else if ( acc.max > curr && acc.second < curr){
    //             acc.second = curr ;
    //         }
    //         return acc ;
    // }, { max : -Infinity, second : -Infinity})
    // console.log(newarr.max);
    // console.log(newarr.second);
    let max = -Infinity ;
    let second = -Infinity ;
    for( let i = 0 ; i < arr.length ; i++){


            if( arr[i] > max){

                second = max ;
                max = arr[i] ;
            }
            else if( arr[i] < max && arr[i] > second ){

                    second = arr[i] ;
            }
    }
    console.log(second);
    