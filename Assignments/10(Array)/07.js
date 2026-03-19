// 7. Find average of array.

    let arr = [10,20,30,40] ;
    let length = arr.length ;
    let sum = arr.reduce( (acc, curr) => {

            return acc+curr ;
    }, 0)
    console.log(sum);
    console.log(length);
    console.log("Average =", sum/length);