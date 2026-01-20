// 9. How do you loop through an array using:
// for

    // let arr = [20, 30, 40, 50] ;
    // for( let i = 0 ; i < arr.length ; i++){

    //     console.log(arr[i]);  
    // }

// for...of

    // let num = [2, 4, 6, 8, 10] ;
    // for (const values of num) { 
        
    //     console.log(values);      
    // }//No index Needed.

//  forEach()

    let names = ["Rohit", "Akshay", "Harish"] ;
    names.forEach( (keys, index) => {

        console.log(keys); // Values
        console.log(index); // Index
        
    }) // Mostly Used