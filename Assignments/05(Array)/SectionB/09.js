// 19. What does fill() do? Give a real-world example.
//= The fill() method is used to fill all or part of an array with a fixed value.

    //Array.fill(value, startIndex, EndIndex)

    // let arr = [10, 20, 40] ;
    // arr.fill(0) ;
    // console.log(arr);
    
    // let arr = [10, 20, 40] ;
    // arr.fill(0, 1) ; // Fill Given Value From First Index
    // console.log(arr);
    
    let arr = [10, 20, 40, 50, 60, 70] ;
    arr.fill(0, 1, 4) ; // Fill Given Value From First Index to 3rd [4tb not include].
    console.log(arr);
    