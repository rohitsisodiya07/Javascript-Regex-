// Find the first element greater than 50.

let arr = [10, 20, 30, 50, 60, 40, 70, 80];

//for of

// for (let value of arr) {
//   if (value > 50) {
//     console.log(value);
//     break;
//   }
// }

//find

    let check = arr.find( num => num > 50 )
    console.log(check);
    
