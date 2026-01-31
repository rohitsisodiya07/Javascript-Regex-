// Remove falsy values (false, 0, "", null, undefined, NaN) from an array.

    //filter

        let arr = [10, false, 0, 20, "Rohit", "", null, undefined] ;
        let newArr = arr.filter(Boolean)
        console.log(newArr);
        

        