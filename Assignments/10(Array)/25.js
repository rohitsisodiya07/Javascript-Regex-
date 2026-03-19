// 25. Find longest increasing subarray

    let arr = [1,2,3,1,2,3,4,1] ;
    let result = [arr[0]] ;
    let largest = [arr[0]] ;

    for( let i = 1 ; i < arr.length ; i++){

        if( (arr[i] > arr[i-1]) ){
        
                result.push(arr[i]) ;
        }
        else{
                if( result.length > largest.length){
                    largest = [...result] ;
                }
                result = [arr[i]] ;    
            }
        }

        if( result.length > largest.length){
            largest = [...result] ;
        }

        console.log(largest);
    