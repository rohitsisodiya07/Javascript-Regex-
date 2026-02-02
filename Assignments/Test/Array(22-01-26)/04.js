// 4. Find the second largest number in the array.
      
    let arr = [1, 5, 13, 8, 15, 2, 23]
    let second = arr.reduce( (acc, curr) => {
        
            if( curr > acc.max){
            acc.second = acc.max ;
            acc.max = curr;
        }
        else if( acc.max > curr && acc.second < curr){
                acc.second = curr ;
            }
            return acc ;
        
        }, {max : -Infinity ,second : -Infinity} )
        console.log(second.max);
        console.log(second.second);
    