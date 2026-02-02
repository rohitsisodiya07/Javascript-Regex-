// 5. Given an array of numbers, find the average of all elements.

    let arr = [10, 20, 30, 40, 55, 52 ]
    let length = arr.length ;

    let sum = arr.reduce( (acc, curr)  => {

        return acc+curr ;
    }, 0)
    console.log(sum/length);
    