// 24. What does findIndex() return?
// = return the index(position) of the first element in an array that satisfies the condition. otherwise return -1


let numbers = [5, 11, 5, 6, 8, 1] ;
let result = numbers.findIndex( num => num > 8) ; // return index of first match.
console.log(result);
