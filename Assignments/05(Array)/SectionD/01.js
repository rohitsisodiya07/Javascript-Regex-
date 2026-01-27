// 26. What is the difference between map() and forEach()?

// map [Iterates over array and return new array, original array not changed]

    let num = [2, 4, 6, 8, 10] ;
    let double = num.map( num => num*2) ;
    console.log(double);
    
// foreach - just loop [iterates over array, does not return anything]

    let number = [1, 3, 5, 7, 9] ;
    number.forEach( num => {
        console.log(num*2);
        
    })