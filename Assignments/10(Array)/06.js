// 6. Find sum of array.

    let arr = [10,20,30,40] ;
    let sum = arr.reduce( (acc, curr) => {

            return acc+curr ;
    }, 0)
    console.log(sum);
    