// 10. How do you copy one array into another?

//Directly Copy.

    // let arr = [10, 20, 30] ;
    // let copies = arr ;
    // copies.push(40) // Push in Both Array [Because array are reference type. both point to same memory]

    // console.log(arr);
    // console.log(copies);
    

//Using Spread Operator. [Do Shallow Copy]
    // let arr = [10, 20, 30] ;
    // let sec = [...arr] ;

    // sec.push(40) ;
    // console.log(sec);
    // console.log(arr);
    

//Using slice. [Do Shallow Copy]
    // let arr = [10, 20, 30] ;
    // let sec = arr.slice() ;

    // sec.push(40) ;
    // console.log(sec);
    // console.log(arr);

//For Doing Deep Copy Use StructuredClone()

    let arr = [10, [20, 30], 40] ;
    let sec = structuredClone(arr) ;

    sec[0] = 50 ; // Not Changed in Actual Because We do Deep Copy.

    console.log(sec);
    console.log(arr);
    
    