// Find duplicate elements in an array.

let arr = [1, 2, 3, 4, 2, 4, 5, 7, 1];
//Using reduce
// let result = arr.reduce( (acc, curr, index) => {

//         if( arr.indexOf(curr) != index && !acc.includes(curr)){

//             acc.push(curr) ;
//         }
//         return acc ;
// }, [])
// console.log(result);





//Using Set
let seen = new Set();
let result = new Set();

arr.forEach((num) => {
  if (seen.has(num)) {
    result.add(num);
  } else {
    seen.add(num);
  }
});
console.log(...result);
