// 12. Create a new object with values multiplied by 2.

    let obj = {
        1 : 20,
        2 : 40,
        3 : 60 
    }
    //Using map
    // let newObj = Object.fromEntries( Object.entries(obj).map( ([key, value]) => [key, value*2]) )
    // console.log(newObj);

    //Using Reduce
    let newObj = Object.entries(obj).reduce( (acc, [key, value]) => {

        acc[key] = value*2
        return acc ;
    }, {})
    console.log(newObj);
    
    