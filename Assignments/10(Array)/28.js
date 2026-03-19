// 28. Chunk array into groups

        let arr =  [1,2,3,4,5,6,7,8] ;
        let size = 4 ;

        let newArr = [] ;

        for( let i = 0 ; i < arr.length ; i+=size){

                newArr.push(arr.slice(i, i+size)) ;

        }
        console.log(newArr);
        