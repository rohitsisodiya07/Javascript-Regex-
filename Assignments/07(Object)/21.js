// 21. Find the key with the maximum value in an object.


    let obj = {

            1 : 10,
            2 : 5,
            3 : 11,
            4 : 8
    }

    let  max = Object.entries(obj).reduce( (acc, curr) => {

        if( acc[1] > curr[1] ) return acc ;
        else return curr ;
    }, -Infinity)[0] ;
    console.log(max);
    