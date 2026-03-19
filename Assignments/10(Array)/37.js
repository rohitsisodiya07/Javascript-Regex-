// 37. Find duplicates using Set


    function findDuplicate(arr){

            let sets = new Set() ;
            let dupli = [] ;
            for( let val of arr){

                    if( sets.has(val)){

                            dupli.push(val)
                    }
                    else{
                        sets.add(val) ;
                    }
            }
            return dupli ;
    }
    let arr = [1,2,3,2,4,1,5] ;
    console.log(findDuplicate(arr))