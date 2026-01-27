// 14. What is the difference between splice() and slice()?

//Slice [Extracts Elements, Does Not Change Original Array, Returns a New Array]

// let arr = [10, 20, 30, 40];
// let another = arr.slice(0, 2); //EndIndex Not Include
// console.log(another);

//Splice [Adds/Removes/Replaces Elements, Changed Original Array, Return Removed Element]

let arr = [10, 20, 30, 40];
let another = arr.splice(0, 2, 5, 6);
console.log(another); // Removed Element
console.log(arr);




//Slice() Copies Element Without modifying the original array, while splice() modifies the original array by adding, removing or replacing elements.