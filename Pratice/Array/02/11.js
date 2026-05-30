//Longest Common Prefix

     let  arr = ["flower", "flow", "flight"] ;

    function getCommon(arr){

            arr.sort() ;
            let first = arr[0] ;
            let last = arr[arr.length-1] ;
            let res = "" ;
            for( let i = 0 ; i < first.length ; i++){

                    if(first[i] === last[i]){
                        res+=first[i] ;
                    }
                    else break ;
            }
            return res ;
    }
     console.log(getCommon(arr) );