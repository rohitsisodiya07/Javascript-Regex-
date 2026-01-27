// 29. How can you flatten a nested array?

//Flatten means converting a nested array into a single array.

    //flat

        let arr = [1, 2, [3, [4, 5], 6], 8]
        console.log(arr.flat()); // remove one level.
        console.log(arr.flat(Infinity)); // remove all level
        
    