// 4. Find second largest number

    let arr = [10,45,23,89,12] ;
    let result = arr.reduce( (acc, curr) => {

            if( curr > acc.first){
                acc.second = acc.first ;
                acc.first = curr ;
            }
            else if( acc.first > curr && curr > acc.second){
                acc.second = curr ;
            }
            return acc ;
    }, { first : -Infinity, second : -Infinity})

        console.log(result.second);
        