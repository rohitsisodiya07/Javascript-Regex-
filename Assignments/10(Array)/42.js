// 42. Replace negative numbers with 0

    let arr =   [3,-2,5,-7,9] ;

    let newArr = arr.map( res => {

            if( res < 0) return 0 ;
            else return res ;
    })
    console.log(newArr);
    