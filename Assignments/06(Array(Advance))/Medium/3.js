// Find the sum of all numbers in an array.

    let arr = [10, 20, 30, 40, 50] ;

    //reduce
    let newArr = arr.reduce( (acc, curr) => {

            return acc+curr ;
    }, 0)
    console.log( "Sum of Array = ", newArr);
    

