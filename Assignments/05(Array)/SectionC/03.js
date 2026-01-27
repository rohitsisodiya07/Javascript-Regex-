// 23. How does find() differ from filter()?

// Both find() and filter() are used to search elements in an array

//Find() [return the first element that matches the condition, stop searching after first match, return undefined if not found]

// let number = [3, 5, 10, 15, 20, 25, 30] ;

// let result = number.find( num => num % 2 == 0 ) ; // stop After Find 10.
// console.log(result);

//Filter() [return all elements that match condition, always return array, return empty array[] if no match]

let number = [3, 5, 10, 15, 20, 25, 30];

let result = number.filter((num) => num % 2 == 0);
console.log(result);
