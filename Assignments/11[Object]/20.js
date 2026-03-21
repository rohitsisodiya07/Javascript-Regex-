// 20. Sum all numeric values of an object.

    let userData ={

        name : "Rohit",
        hindi : 70,
        english : 40,
        science : 80,
        math : 75
    }
    let arr = Object.entries(userData).reduce( (acc, curr) => {

            if( typeof curr[1] === "number"){
                acc += curr[1] ;
            }
            return acc ;
    }, 0)
    console.log(arr);
    