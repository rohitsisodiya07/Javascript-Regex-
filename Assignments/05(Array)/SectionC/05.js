// 25. Explain some() vs every() with use cases.

// = some() check if atleast one element satisfies a condition, while every() checks if all elements satisfy the condition.

// some - return true if any one element satisfy the condition and return false if no element matches.

    // let number = [2, 4, 5, 8, 10] ;
    // let checkEven = number.some( num => num % 2 == 0)
    // console.log(checkEven);
    
//every - return true if all elements satisy the condition else return false 

    let number = [2, 4, 5, 8, 10] ; // 5 not satisfy condition.
    let checkEven = number.every( num => num % 2 == 0)
    console.log(checkEven);