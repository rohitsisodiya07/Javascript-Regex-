// 20. How does copyWithin() work?
// = copyWithin() copies elements from one part of an array to another part within the same array without changing its length.

    // array.copyWithin(target, start, end) target - index where copy element will be placed


    // let arr = [10, 20, 30, 40, 50] ;
    // arr.copyWithin(1, 3) ; // start copy from 3 and put at from index 1.
    // console.log(arr);
    
    let arr = [10, 20, 30, 40, 50] ;
    arr.copyWithin(1, 2, 4) ; // start copy from 2 to 3[4th not include] and put at from index 1.
    console.log(arr);