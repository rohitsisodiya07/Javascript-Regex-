// Convert an array into a key-value map object.

    let arr = [10, 20, 30, 40, 50] ;

    //Using reduce
    let result = arr.reduce( (acc, curr, index) => {

            acc[index] = curr ;
            return acc ;
    }, {})
    console.log(result);
    

    //Normal Way

    // let obj = {...arr} ;
    // console.log(obj);
     