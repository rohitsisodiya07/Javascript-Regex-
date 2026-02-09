// Remove an element at a specific index without mutating the array.



    let arr = [10, 20, 30, 40, 50, 60, 70, 80] ;
    let index = 4 ;
    let result = [ ...arr.slice(0, index), ...arr.slice(index+1)] ;
    console.log(result);
    


    //******************************************* */
    //not recommended

    // let arr = [10, 20, 30, 40, 50, 60] ;
    // let target = 3 ;
    
    // let result = arr.filter( (num, index) => {
    //     if ( index != target) return num ;
    //     }) ;

    // console.log(result);
        