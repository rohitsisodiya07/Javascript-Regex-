// 15. Move zeros to beginning
        
            let arr = [1, 0, 2, 3, 0, 5, 6] ;
            let j = arr.length-1 ;

            for( let i = arr.length-1 ; i >= 0 ; i--){

                if( arr[i] !== 0){

                    [arr[i], arr[j]] = [arr[j], arr[i]] ;
                    j--;
                }
            }
            console.log(arr);
            