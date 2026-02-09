// Find the longest string in an array.

    let arr = [ "Rohit", "Sisodiya", "RohitSisodiya", "Jallaludin"]

    let newArr = arr.reduce( (acc, curr) => {

            if( curr.length > acc.length ) {
                acc = curr ;
            }
            return acc ;
    }, "")
    console.log(newArr);
    