// 30. What is the purpose of flatMap()?

// = flatmap method is used to map(transform) elements and flatten the result by one level at the same time/

        let arr = [1, 2, 3] ;
        // let result = arr.map(x => [x, x*2]) ;
        // console.log(result);
        
        // //now flatten
        // let flatten = result.flat() 
        // console.log(flatten);

        //flatmap does both
        let  result = arr.flatMap(x => [x, x*2]) ;
        console.log(result);
        