// 28. Explain reduce() and its parameters.

// = reduce is used to reduce an array to a single value.

// Array.reduce( (accumulator, currentValue
// ) =>{
//     return updatedAccumulator ;
// }, initialValue) ;
//      1. accumulator(acc) - this stores the result so frameElement, it gets updated on every iteration
//      2. currentValue(curr) - the current element being processed in the array
//      3. initialValue = Initial Value of Accumulator.

//Sum
// let num = [10, 20, 30];
// let sum = num.reduce((acc, curr) => {
//   // acc = first element , curr = second element

//   return acc + curr;
// }, 0);

// console.log(sum);

//Maximum
    let number = [2, 5, 10, 20, 3, 5, 6, 8] ;
    let get = number.reduce((acc, curr) => {

            if( curr > acc) return curr ;
            else return acc ;
    }, 0)
    console.log(get);
    