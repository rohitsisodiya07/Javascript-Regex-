// 13. Find missing number in array

        let arr = [1,2,3,4,6] ;

        let n = arr.length+1 ;

        let sum1 = n * ( n + 1 ) / 2 ;

        let sum2 = arr.reduce( (acc, curr) => {

                return acc+curr;
        }, 0) ;

        console.log(sum1 - sum2);
        
        