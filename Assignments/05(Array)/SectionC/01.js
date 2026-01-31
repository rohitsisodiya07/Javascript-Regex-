// 21. Explain indexOf() vs lastIndexOf().

// Both methods are used to find the position (index) of an element in an array or string, but they search in opposite directions.

//indexof()[search from left to right, return -1 if not found  ]

    let arr = [10, 20, 30, 40] ;
    console.log(arr.indexOf(20)); // Return the index of first occurence of value.
    

//lastindexof()[Search from right to left, return -1 if not found]

    let num = [20, 40, 60, 60, 80, 60, 70] ;
    console.log(num.lastIndexOf(60)); // Return the index of last occurence of value.
    