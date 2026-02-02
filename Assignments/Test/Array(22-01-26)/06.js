// 6. Convert the given array into an object using the index as the key.
      
    let arr = ["5", 10, 25, "55", null]

    let obj = arr.reduce( (acc, curr, index) => {

            acc[index] = curr ;
            return acc ;
        
    }, {})
    console.log(obj);
    


    //Using Normal
    // let obj = {...arr} ;
    // console.log(obj);
    