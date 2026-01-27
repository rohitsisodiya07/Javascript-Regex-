// 15. How do toSpliced() and splice() differ?

//Splice [ Modifies the Original Array]

    // let arr = [10, 20, 30, 40] ;
    // let another = arr.splice(0, 2, 5, 6) ;
    // console.log(arr); // Updated Array
    // console.log(another); // Removed Element
 
//toSpliced [Does Not Changed the Original Array]
    let num = [10, 20, 30, 40] ;
    let other = num.toSpliced(0, 2, 5, 6) ;
    console.log(num); // Updated Array
    console.log(other); // Removed Element