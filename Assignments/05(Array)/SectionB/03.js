// 13. How does splice() work? Explain all its parameters.

// Splice is Used for: [Splice is Used to add, remove, or replace elements in array and it modifies the original array]

// 1. Add Element
// 2. Remove Element
// 3. Replace Element

// [Splice Chnage in Original Array] 

// array.splice(startIndex, deleteCount, item1, item2...)

//startIndex = From Which Index to Start.
//deleteCount = How Many Elements to Remove
//item1... = items to add(Optional).

let arr = ["apple", "banana", "orange", "grapes"] ;
arr.splice(1, 2, "WaterMelon" )
console.log(arr);

